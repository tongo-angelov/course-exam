const DIRECTIONS = ['E', 'NE', 'N', 'NW', 'W', 'SW', 'S', 'SE'];

export const parseDirection = (degrees) => {
    const dir = Math.floor(degrees / 45);
    return DIRECTIONS[dir];
};
