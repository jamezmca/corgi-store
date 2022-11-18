import { component$, useClientEffect$, useContext, useStore, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import { MyContext } from '~/root';

export default component$(() => {
    const loc = useLocation();

    const state = useStore({
        name: '',
        price: '',
        url: ''
    });

    const contextState = useContext(MyContext)
    console.log('context state', contextState)

    useClientEffect$(() => {
        const data = JSON.parse(localStorage.getItem('corgitto'))
        state.name = data.name
        state.url = data.url
        state.price = data.price

    });

    useClientEffect$(() => {
        if (localStorage.getItem('corgi-basket')) {
            contextState.items = [...JSON.parse(localStorage.getItem('corgi-basket')).items]
        }
    })

    return (
        <div class="flex flex-col gap-2">
            <img src={state.url} alt={state.name} class="object-cover relative z-10" />
            <div class="flex justify-between p-4">
                <h2 class="text-xl">{state.name}</h2>
                <p>${state.price}</p>
            </div>
            <button onClick$={() => {
                let currBasket = { items: [] }
                if (localStorage.getItem('corgi-basket')) {
                    currBasket = JSON.parse(localStorage.getItem('corgi-basket'))
                }
                currBasket.items.push(state)
                localStorage.setItem('corgi-basket', JSON.stringify(currBasket))
                contextState.items = [...contextState.items, state]
            }} class="border py-2 border-slate-900 border-solid px-8 mx-auto hover:opacity-50">ADOPT </button>
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Qwik Flower',
};
