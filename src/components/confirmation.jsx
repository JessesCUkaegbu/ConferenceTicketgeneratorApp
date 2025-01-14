function Confirmation() {
    return (
        <>
    <div class="text-center space-y-6 max-w-lg mx-auto text-white">
   
    <h1 class="font-bold text-lg uppercase">Coding Conf</h1>

    <h2 class="text-3xl font-bold">
      Congrats, <span class="text-[#ff8466]">Jonatan Kristof!</span>
      <br />Your ticket is ready.
    </h2>

    <p class="text-sm text-gray-400">
      We've emailed your ticket to
      <span class="text-[#ff8466]">jonatan@email.com</span>
      and will send updates in the run up to the event.
    </p>

    <div class="relative mt-10">
      <div class="flex items-center justify-between p-6 bg-gradient-to-br from-[#2A1B54] via-[#211542] to-[#2A1B54] rounded-lg shadow-lg ring-2 ring-[#211542] relative z-10">
        <div>
          <h3 class="text-xl font-bold">Coding Conf</h3>
          <p class="text-sm mt-2">Jan 31, 2025 / Austin, TX</p>
          <div class="flex items-center mt-4 space-x-3">
            <img src="https://via.placeholder.com/40x40" alt="Avatar"
              class="w-10 h-10 rounded-full ring-2 ring-[#ff8466]" />
            <div>
              <p class="font-semibold">Jonatan Kristof</p>
              <p class="text-sm text-gray-400">@jonatankristof0101</p>
            </div>
          </div>
        </div>
        <div class="border-l-2 border-gray-600 px-4 h-20"></div>
        <p class="font-mono text-lg font-bold">#40609</p>
      </div>
      <div
        class="absolute top-1/2 left-full h-6 w-6 rounded-full bg-[#121033] transform -translate-y-1/2 z-0 border-[3px] border-[#2A1B54]"></div>
      <div
        class="absolute top-1/2 right-full h-6 w-6 rounded-full bg-[#121033] transform -translate-y-1/2 z-0 border-[3px] border-[#2A1B54]"></div>
    </div>
   </div>
   </>
    )
}


export default Confirmation;