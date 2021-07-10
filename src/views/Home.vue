<template>
    <Slidesgames />
    <Streams/>
</template>

<script>
import Slidesgames from '@/components/Slidesgames'
import Streams from '@/components/Streams'


export default {
  name: 'Home',
  components: {
    Slidesgames,
    Streams
  }
}
</script>