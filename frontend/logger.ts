class Logger {
  #badgeStyle =
    'background: rgb(43, 89, 216); color: white;';
  #resetStyle = 'background: transparent;';
  #badgeText: string;

  constructor(badgeText: string) {
    this.#badgeText = badgeText;
  }

  info(...args: unknown[]) {
    console.info(
      `%c ${this.#badgeText} %c`,
      this.#badgeStyle,
      this.#resetStyle,
      ...args,
    );
  }

  debug(...args: unknown[]) {
    console.debug(
      `%c ${this.#badgeText} %c`,
      this.#badgeStyle,
      this.#resetStyle,
      ...args,
    );
  }
}

export default new Logger('Fullscreen Notifications Fix');
