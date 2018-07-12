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
      images: Array,
      editable: Boolean
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
      ondropped (file, cell) {
        return new Promise((resolve, reject) => {
          if (this.editable) {
            if (this._events.ondrop)
              this.$emit('ondrop', {
                file,
                cell,
                cb: file => this.process_file(file).then(image => this.add_image(image, cell) && resolve())
              })
            else {
              this.process_file(file)
                .then(image => this.add_image(image, cell) && resolve())
            }
          } else resolve()
        })
      },
      onremove (cell) {
        return new Promise((resolve, reject) => {
          if (this._events.onremove)
            this.$emit('onremove', {
              image: cell.image,
              cb: () => this.remove_image(cell) && resolve()
            })
          else
            this.remove_image(cell) & resolve()
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
        this.images.push(cell.image = image)

        return this
      },
      remove_image (cell) {
        delete this.images[this.images.indexOf(cell.image)]

        return this
      }
    },
    components: {
      Cell
    }
  }
</script>