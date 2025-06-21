class Logger {
  #style = 'background: rgb(43, 89, 216); color: white;';
  #module: string;
  #organisation: string;

  constructor(module: string, organisation: string) {
    this.#module = module;
    this.#organisation = organisation;
  }

  #infoStyle = 'background: rgb(28, 135, 206); color: white;';
  info(...args: unknown[]) {
    console.info(
      `%c ${this.#organisation} %c ${this.#module} %c`,
      this.#style,
      this.#infoStyle,
      'background: transparent;',
      ...args,
    );
  }
}

export default new Logger('Notifications', 'Non-Steam');
