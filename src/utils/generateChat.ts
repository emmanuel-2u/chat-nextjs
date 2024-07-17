import { faker } from '@faker-js/faker';

export function allChat() {
    return Array.from({ length: randomNumber(3, 5) }).map(generateForADay);
}

function generateForADay() {
    const date = dateOfChat();
    const messagesForADay = Array.from({ length: randomNumber(1, 6) }).map(singleChat);

    return {
        date,
        messagesForADay
    };
}

function singleChat() {
    return {
        isDoubleTicked: randomBoolean(),
        isFromUser: randomBoolean(),
        message: chatMessage(2),
        timeSent: sentTime(),
        sent: randomBoolean()
    };
}

function randomNumber(min: number = 1, max: number = 3) {
    return faker.number.int({ min, max });
}

function chatMessage(lines: number) {
    return faker.lorem.lines(lines);
}

function randomBoolean() {
    return faker.datatype.boolean();
}

function AMOrPM(hour: number) {
    return randomBoolean() ? 'AM' : 'PM';
}

function appendZero(value: number) {
    return value < 10 ? `0${value}` : value;
}

function sentTime() {
    const hour = randomNumber(1, 12);
    const minute = randomNumber(0, 60);

    return `${appendZero(hour)}:${appendZero(minute)} ${AMOrPM(hour)}`;
}

function monthString(month: number) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return months[month];
}

function dateOfChat() {
    const date = faker.date.anytime();

    const day = date.getDay();
    const month = monthString(date.getMonth());
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
}