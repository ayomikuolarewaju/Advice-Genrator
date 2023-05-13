<script>
     import img1 from '../img/icon-dice.svg';
     import img2 from '../img/pattern-divider-desktop.svg';
     import img3 from '../img/pattern-divider-mobile.svg';
</script>


<div class="flex flex-col overflow-hidden items-center my-auto ">
    <div class="w-1/3 h-full bg-gray-800 shadow-2xl p-10 rounded-md items-center mx-auto">
        <h3 class="mx-auto text-green-500 font-bold">ADVICE </h3>
        <p class=" mx-auto md:text-xl pt-5 pb-5 text-white text-center md:font-bold text:sm">
            loading.................
        </p>
        <img src="{img2}" alt="" srcset="" width="450" height="250" class="mx-auto pb-10 pt-10"> 

    </div>
    <div class="relative -top-7 bg-green-600 rounded-full p-5 hover:shadow-lime-900 hover:shadow-2xl">
        <img src="{img1}" alt="" width="20" height="20" on:click={()=>{console.log('loading')}} on:keydown>

    </div>

</div>
