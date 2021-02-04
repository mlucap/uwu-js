const faces = [
    '(*^ω^)',
    '(◕‿◕✿)',
    '(◕ᴥ◕)',
    'ʕ•ᴥ•ʔ',
    'ʕ￫ᴥ￩ʔ',
    '(*^.^*)',
    'owo',
    'OwO',
    '(｡♥‿♥｡)',
    'uwu',
    'UwU',
    '(*￣з￣)',
    '>w<',
    '^w^',
    '(つ✧ω✧)つ',
    '(/ =ω=)/',
    '~~'
    // TODO: Add more
];

module.exports = (str) => {
    str = str.replace(/(?:l|r)/g, 'w');
    str = str.replace(/(?:L|R)/g, 'W');
    str = str.replace(/n([aeiou])/g, 'ny$1');
    str = str.replace(/N([aeiou])|N([AEIOU])/g, 'Ny$1');
    str = str.replace(/ove/gi, 'uv');
    str = str.replace(/nd(?= |$)/gi, 'ndo');
    str = str.replace(/([!])+/g, v => ` ${faces[Math.floor(Math.random() * faces.length)]}`);
    str = str.replace(/([.])+/g, v => ` ${faces[Math.floor(Math.random() * faces.length)]}`);

    return str;
};
