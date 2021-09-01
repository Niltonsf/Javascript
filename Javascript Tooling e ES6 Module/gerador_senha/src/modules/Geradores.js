export default class Geradores {
    rand(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    genNumber() {
        return String.fromCharCode(this.rand(48, 58));
    }

    genMaiusculas() {
        return String.fromCharCode(this.rand(65, 91));
    }

    genMinusculas() {
        return String.fromCharCode(this.rand(97, 123));
    }

    genSimbols() {
        return String.fromCharCode(this.rand(33, 39));
    }
}