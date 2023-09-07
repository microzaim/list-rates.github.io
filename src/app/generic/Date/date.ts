export const getCurrentDateInRussianFormat = (): string => {
    const currentDate = new Date();
    return currentDate.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });
}
