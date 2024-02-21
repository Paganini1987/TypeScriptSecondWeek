import './style.css';
import ITotalPrice from './interface.ts';
const totalPrice = (data: ITotalPrice): number => {
    const discount: number = data.price * (data.discount / 100);

    if (data.isInstallment) {
        return (data.price - discount) / data.months;
    } else {
        return data.price / data.months;
    }
};

const price: number = totalPrice({
    price: 100000,
    discount: 25,
    isInstallment: true,
    months: 12,
});

const result: HTMLElement | null = document.querySelector('#result');

if (result) {
    result.innerHTML = Math.round(price).toString();
}
