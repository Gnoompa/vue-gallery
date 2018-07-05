<template>
  <main @drop.prevent.stop @dragover.prevent.stop>
    <slot name="grid">
        <Cell v-for="(image, key) in images" :image="image" :key="key" @dropped="ondropped" />
    </slot>
  </main>
</template>

<script>
  import Cell from './Cell.vue'

  export default {
    props: {
      images: Array
    },
    computed: {
      payload () {
        return {
          images: this.images,
          process: this.process
        }
      }
    },
    methods: {
      ondropped (files, process_image) {
        return new Promise((resolve, reject) => {
          if (this._events.ondrop)
            this.$emit('ondrop', {
              file: files[0],
              cb: file => this.process_file(file).then(image => this.add_image(image, process_image(image)) && resolve())
            })
          else {
            this.process_file(files[0])
              .then(image => this.add_image(image, process_image(image)) && resolve())
          }
        })
      },
      process_file (file) {
        var image = {}

        return new Promise((resolve, reject) => {
           let [_file, error] = this.validate(file)

            if (error) reject(this.error(error))
            else {
                const reader = new FileReader()

                reader.onload = event => this.$set(image, 'src', event.target.result) && resolve(image)

                reader.readAsDataURL(file)
            }
        })
      },
      validate (file) {
          return typeof file === 'object' && file.type ? [file] : [file, { msg: 'Invalid file', file }]
      },
      error (msg) {
          return console.error(msg) && this
      },
      add_image (image, cell) {
        cell.order !== undefined ? this.$set(this.images, cell.order, image) : this.images.push(image)

        return this
      }
    },
    components: {
      Cell
    }
  }
</script>

<style scoped>
  .grid {
    display: flex;
  }
</style>