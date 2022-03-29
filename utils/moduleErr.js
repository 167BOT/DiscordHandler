class moduleErr extends Error {
  constructor(err) {
    super()

    this.name = '[DiscordHandler]'
    this.message = err
  }
}

module.exports = moduleErr
