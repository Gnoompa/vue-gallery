<template>
  <main @drop.prevent.stop @dragover.prevent.stop>
    <slot></slot>
  </main>
</template>

<script>
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
        return new Promise((resolve, reject) =>
          this._events.ondrop ?
            this.$emit('ondrop', { file, cell, resolve })
          : this.process_file(file).then(image => this.add_image(image, cell) & resolve())
        )
      },
      onremove (cell) {
        return new Promise((resolve, reject) =>
          this._events.onremove ?
            this.$emit('onremove', {
              image: cell.image,
              cb: resolve
            })
          : this.remove_image(cell) & resolve()
        )
      },
      process_file (file) {
        return new Promise((resolve, reject) =>
          (reader =>
            reader.onload = event => resolve({ src: event.target.result }) &
            reader.readAsDataURL(file)
          )(new FileReader())
        )
      },
      add_image (image, cell) {
        this.images[this.images.indexOf(cell.image)] = image
      },
      remove_image (cell) {
        delete this.images[this.images.indexOf(cell.image)]
      }
    }
  }
</script>