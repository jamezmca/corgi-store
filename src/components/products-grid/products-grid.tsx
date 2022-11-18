import { component$, useStylesScoped$, useStore } from '@builder.io/qwik';
import Card from '../card/card';
import { QwikLogo } from '../icons/qwik';

export default component$(() => {
//   const store = useStore({
//     scrolled: false
//   })
    const corgis = [
    {name: 'Douglas', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Welchcorgipembroke.JPG', price: '1,500'},
    {name: 'Noodle', url: 'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1070837284-e1611613819374.jpg', price: '4,000'},
    {name: 'Corgette', url: 'https://images2.minutemediacdn.com/image/upload/c_crop,w_6960,h_3915,x_0,y_521/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/mentalfloss/01g05dr5ywhn47egkrkd.jpg', price: '1,200'},
    {name: 'Waffles', url: 'https://dogsbestlife.com/wp-content/uploads/2019/02/corgi.jpeg', price: '1,400'},
    {name: 'Banana Nut Muffin', url: 'https://hellobark.com/wp-content/uploads/corgi-1200.jpg', price: '2,500'},
    {name: 'Ein', url: 'https://img.freepik.com/premium-photo/portrait-cute-welsh-corgi-dog-park_179755-18115.jpg?w=2000', price: '12,000'},
    ]

  return (
   <div id="products" class="min-h-screen grid place-items-center py-8">
    <div class="flex gap-4 flex-wrap items-stretch justify-center max-w-[1400px] mx-auto">
        {corgis.map((obj) => {
            return <Card {...obj}/>
        })}
    </div>
   </div>
  );
});
