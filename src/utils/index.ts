export const debounce = (func: Function, wait: number) => {
    let timeout: any;

    return (...args: any[]) => {
        const later = () => {
            timeout = null;
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};
  