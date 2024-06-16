export function isOnlyDigits(value) {
    const trimmedValue = value.replace(/\s+/g, '');
    const digitRegex = /^\d+$/;
    return digitRegex.test(trimmedValue);
}