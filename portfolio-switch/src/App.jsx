function App() {

  return (
    <section className="flex justify-center items-center h-screen "> {/* container pai*/}

      <div className="scale-x-[-1] flex p-20 px-5 justify-between items-center bg-[#01B9E3] h-[460px] w-[159px] rounded-r-[100px] flex-col"> {/* controle blue-left*/}
        <div className="relative w-[26px] h-[26px] self-start"> {/* plus button */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-[8px] bg-[#34383B]"></div>
        </div>
        <div className="h-[72px] w-[72px] bg-[#34383B] rounded-full"></div> 
        <div className=" grid grid-cols-3 grid-rows-3 w-[99px] h-[99px]"> {/* d-pad esquerdo */}
          <div className="col-start-2 row-start-1 bg-[#34383B] h-[33px] w-[33px] rounded-full"></div>
          <div className="col-start-2 row-start-3 bg-[#34383B] h-[33px] w-[33px] rounded-full"></div>
          <div className="col-start-1 row-start-2 bg-[#34383B] h-[33px] w-[33px] rounded-full"></div>
          <div className="col-start-3 row-start-2 bg-[#34383B] h-[33px] w-[33px] rounded-full"></div>
        </div>
        <div className="h-[33px] w-[33px] bg-[#34383B] rounded-[5px] self-start"></div>
      </div>

      <div className="flex justify-center items-center bg-[#2D3134] h-[460px] w-[777px] "> {/* 1° container cinza*/}
        <div className="flex justify-center items-center bg-black h-[419px] w-[731px] rounded-[20px]"> {/* 2° container preto*/}
          <div className="flex justify-center items-center bg-[#E8EBE8] w-[625px] h-[344px] rounded-[5px]"> {/* Tela principal*/}

          </div>
        </div>
      </div>

      <div className="flex p-20 px-5 justify-between items-center bg-[#FF6054] h-[460px] w-[159px] rounded-r-[100px] flex-col"> {/* controle red-right*/}
        <div className="relative w-[26px] h-[26px] self-start"> {/* plus button */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-[8px] bg-[#34383B]"></div>
          <div className="absolute left-1/2 -translate-x-1/2 w-[8px] h-full bg-[#34383B]"></div>
        </div> 
        <div className="grid grid-cols-3 grid-rows-3 w-[99px] h-[99px]"> {/* d-pad direito */}
          <div className="col-start-2 row-start-1 bg-[#34383B] h-[33px] w-[33px] rounded-full"></div>
          <div className="col-start-2 row-start-3 bg-[#34383B] h-[33px] w-[33px] rounded-full"></div>
          <div className="col-start-1 row-start-2 bg-[#34383B] h-[33px] w-[33px] rounded-full"></div>
          <div className="col-start-3 row-start-2 bg-[#34383B] h-[33px] w-[33px] rounded-full"></div>
        </div>
        <div className="h-[72px] w-[72px] bg-[#34383B] rounded-full"></div>
        <div className="h-[33px] w-[33px] bg-[#34383B] rounded-full self-start"></div>
      </div>

    </section>
  )
}

export default App
