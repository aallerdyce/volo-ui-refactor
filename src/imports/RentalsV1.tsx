import { useState, useEffect, useRef } from "react";
import { Beer, Lightbulb, Car, Sparkles, Crown, ArrowRight } from "lucide-react";
import svgPaths from "./svg-a8h7fytepd";
import imgImage2 from "figma:asset/145536d607c56d6716416d6d82873d35338c7b51.png";
import imgImage3 from "figma:asset/afe135c050de85241aedf0dfef2cbb1cd854b382.png";
import imgHeader from "../assets/3e9a90ace76a58176595dc9be0512af3e7fba920.jpeg";
import imgImage6 from "figma:asset/6e47fac1aa4b6f616be64a30e74a71cdc24cde3b.png";
import imgImage4 from "figma:asset/0ed1436d75827e8f1f5ea5518201ea34dff21aa8.png";
import iconSolo from "../assets/mobile-solo.svg";
import iconFriends from "../assets/mobile-friends.svg";
import iconTeam from "../assets/mobile-team.svg";
import imgMobilFooter from "../assets/mobil-footer.png";

function Frame2() {
  return (
    <div className="h-[41px] relative flex-1 max-w-[530px] mx-4">
      <div className="h-[41px] w-full relative" data-name="image 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-contain" src={imgImage3} />
        </div>
      </div>
    </div>
  );
}



function Container2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Component 2">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
        <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[20px]">Login</p>
        </div>
      </div>
      <div className="bg-[#c7ff10] content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Component 3">
        <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
          <p className="leading-[20px]">Sign Up</p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center mx-auto relative shrink-0 w-full max-w-[1216px] px-6" data-name="Container">
      <div className="h-[37px] relative shrink-0 w-[91px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent background scrolling when modal is open and reset on desktop resize
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup if window is resized past lg breakpoint (1024px)
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="fixed bg-[#0034DC] flex h-[80px] lg:h-[64px] items-center justify-between left-0 top-0 w-full z-50 px-6 shadow-sm lg:shadow-none" data-name="Nav">
        <div className="h-[37px] relative shrink-0 w-[91px]" data-name="image 2">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage2} />
        </div>

        <div className="flex items-center gap-3 lg:gap-8">
          <div className="hidden lg:flex items-center gap-8">
            <a href="/" className="text-white font-['VoloSansPro:Bold',sans-serif] text-[14px] tracking-wide hover:text-[#c7ff10] transition-colors opacity-70 hover:opacity-100">Leagues</a>
            <a href="/daily-play" className="text-white font-['VoloSansPro:Bold',sans-serif] text-[14px] tracking-wide hover:text-[#c7ff10] transition-colors opacity-70 hover:opacity-100">Daily Play</a>
            <a href="/rentals" className="text-white font-['VoloSansPro:Bold',sans-serif] text-[14px] tracking-wide hover:text-[#c7ff10] transition-colors">Rentals</a>
            <Container2 />
          </div>

          <div onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden size-10 bg-[#c7ff10] rounded-full flex items-center justify-center text-black shadow-sm cursor-pointer hover:bg-[#b0eb00] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
          </div>
        </div>
      </div>

      {/* Mobile Full Screen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0034DC] flex flex-col lg:hidden animate-in slide-in-from-right duration-300">
          <div className="flex items-center justify-between px-6 h-[80px] shrink-0 border-b border-white/10">
            <div className="h-[37px] relative shrink-0 w-[91px]">
              <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage2} />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="size-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex flex-col p-6 gap-6 pt-10">
            <a href="/" className="text-white font-['VoloSansPro:Bold',sans-serif] text-[32px] font-bold tracking-tight active:scale-[0.98] transition-all opacity-70 hover:opacity-100">Leagues</a>
            <a href="/daily-play" className="text-white font-['VoloSansPro:Bold',sans-serif] text-[32px] font-bold tracking-tight active:scale-[0.98] transition-all opacity-70 hover:opacity-100">Daily Play</a>
            <a href="/rentals" className="text-[#c7ff10] font-['VoloSansPro:Bold',sans-serif] text-[32px] font-bold tracking-tight active:scale-[0.98] transition-all flex items-center gap-3">
              Rentals
            </a>
          </div>
        </div>
      )}
    </>
  );
}


function Frame() {
  return (
    <div className="h-[64px] w-full">
      <Nav />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative mb-4 lg:mb-6">
      <div className="h-[65px] relative shrink-0 w-[103px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Proud sponsor</p>
      </div>
    </div>
  );
}

function Trophy() {
  return (
    <div className="relative shrink-0 size-[14px] flex items-center justify-center" data-name="trophy 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_4002)" id="trophy 1">
          <path d={svgPaths.p3128ba00} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
          <path d={svgPaths.p23eb5980} id="Vector_2" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
          <path d={svgPaths.p14917c00} id="Vector_3" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
          <path d="M2 11H10" id="Vector_4" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
          <path d={svgPaths.p27172900} id="Vector_5" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
          <path d={svgPaths.p11385300} id="Vector_6" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
        </g>
        <defs>
          <clipPath id="clip0_1_4002">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}


function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[#22c55e] content-stretch flex h-[30px] items-center px-[12px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-none">Registration Open</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex flex-wrap gap-2 items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#f8fafc] flex items-center gap-1.5 h-[30px] px-3 relative rounded-full shrink-0 shadow-sm shadow-black/5 border border-white/20" data-name="badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#B3E50E" stroke="#B3E50E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" fill="none" />
          <path d="M6 5.3a9 9 0 0 1 0 13.4" fill="none" />
          <path d="M18 5.3a9 9 0 0 0 0 13.4" fill="none" />
        </svg>
        <span className="font-['VoloSansPro:Bold',sans-serif] font-bold text-[#1e293b] text-[13px] tracking-tight leading-none">Private Rentals</span>
      </div>
    </div>
  );
}


function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center leading-[1.1] not-italic relative shrink-0 text-[46px] text-white w-full max-w-[1124px] tracking-tight">
        <p>Private Pickleball Rentals · Club Volo</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Location">
      <div className="text-[#8CA6FA] shrink-0">
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[16px]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      </div>
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center leading-tight not-italic relative shrink-0 text-[14px] text-white">
        <p>Club Volo Brewer's Hill (Canton)</p>
      </div>
    </div>
  );
}



function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">•</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center leading-tight not-italic relative shrink-0 text-[14px] text-white">
        <p>Outdoor Courts with Lights</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[16px]" data-name="Component 3">
        <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-25%_-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
              <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #8CA6FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-25%_-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
              <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #8CA6FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
              <path d={svgPaths.p3b86be00} id="Vector" stroke="var(--stroke-0, #8CA6FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-0.67px_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.33333">
              <path d="M0.666667 0.666667H12.6667" id="Vector" stroke="var(--stroke-0, #8CA6FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <Container10 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-wrap lg:flex-nowrap gap-x-1 lg:gap-[16px] gap-y-2 items-center min-h-px min-w-px relative w-full" data-name="Container">
      <Container7 />
      <div className="hidden lg:block shrink-0">
        <Container8 />
      </div>
      <Container10 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container6 />
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[48px] relative size-full">
        <Frame4 />
        <Container4 />
        <Heading />
        <Container5 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#0f172a] content-stretch flex flex-col gap-[10px] h-auto min-h-[400px] lg:min-h-[480px] items-start overflow-clip relative rounded-none lg:rounded-[24px] shadow-none lg:shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full z-0" data-name="Header">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src="https://s3.amazonaws.com/rivall-user-uploads/prodUploads/rentalImagesFolder/6d1ca8ed-58d9-408d-a08f-1454e6b3d2b5-0.jpeg" />
      </div>
      <div className="absolute bg-gradient-to-t from-[#0f172a] inset-0 to-[rgba(15,23,42,0)] via-[45%] lg:via-[23.077%] via-[rgba(15,23,42,0.5)]" data-name="Gradient" />
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
        <div className="content-stretch flex flex-col gap-[8px] lg:gap-[16px] items-start p-6 lg:p-[48px] relative size-full justify-end">
          <div className="mt-auto w-full">
            <Frame4 />
            <Container4 />
            <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center leading-[1.1] not-italic relative shrink-0 text-[32px] lg:text-[46px] text-white w-full max-w-[1124px] mt-2 tracking-tight">
              <p>Private Pickleball Rentals · Club Volo</p>
            </div>
            <Container5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[20px] relative shrink-0 w-full">
      <Header />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[16px] mt-[-1px]">Format</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[16px]" data-name="Component 3">
        <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 5.33333">
              <path d={svgPaths.p352c6500} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-12.92%_-33.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33096 6.49632">
              <path d={svgPaths.p39a2ea10} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
          <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.3335 5.24683">
              <path d={svgPaths.p234883c0} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
              <path d={svgPaths.p31080000} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center not-italic relative shrink-0 text-[#1e293b] text-[16px] whitespace-nowrap">
        <p className="leading-none mt-[-1px]">6v6 Coed</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 flex-1 min-w-0" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[16px] mt-[-1px]">Time</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[16px]" data-name="Component 3">
        <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.00015 6.66681">
              <path d={svgPaths.pf2f9980} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
              <path d={svgPaths.p3d62dd80} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center not-italic relative shrink-0 text-[#1e293b] text-[16px] whitespace-nowrap">
        <p className="leading-none mt-[-1px]">8pm - 10pm</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 flex-1 min-w-0" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[16px] mt-[-1px]">Duration</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[16px]" data-name="Component 3">
        <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-25%_-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
              <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-25%_-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 4">
              <path d="M0.666667 0.666667V3.33333" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
              <path d={svgPaths.p3b86be00} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-0.67px_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 1.33333">
              <path d="M0.666667 0.666667H12.6667" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_66.63%_41.67%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
              <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[41.67%] left-1/2 right-[49.96%] top-[58.33%]" data-name="Vector">
          <div className="absolute inset-[-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
              <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_33.29%_41.67%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
              <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[33.33%] right-[66.63%] top-3/4" data-name="Vector">
          <div className="absolute inset-[-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
              <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-1/2 right-[49.96%] top-3/4" data-name="Vector">
          <div className="absolute inset-[-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
              <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[66.67%] right-[33.29%] top-3/4" data-name="Vector">
          <div className="absolute inset-[-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
              <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center not-italic relative shrink-0 text-[#1e293b] text-[16px] whitespace-nowrap">
        <p className="leading-none mt-[-1px]">6 Wks + Playoffs</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 flex-1 min-w-0" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[16px] mt-[-1px]">Roster Min</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[16px]" data-name="Component 3">
        <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 5.33333">
              <path d={svgPaths.p352c6500} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
              <path d={svgPaths.p31080000} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.33%_20.83%_41.67%_79.17%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-0.67px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 5.33333">
              <path d="M0.666667 0.666667V4.66667" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[45.83%_8.33%_54.17%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-0.67px_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 1.33333">
              <path d="M4.666667 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center not-italic relative shrink-0 text-[#1e293b] text-[16px] whitespace-nowrap">
        <p className="leading-none mt-[-1px]">9 Players</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 flex-1 min-w-0" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full shadow-sm" data-name="Background+Border+Shadow">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch grid grid-cols-2 lg:flex lg:flex-row gap-y-8 gap-x-4 lg:gap-[32px] items-start lg:justify-center p-6 lg:p-[25px] relative w-full">
          <Container12 />
          <Container15 />
          <Container18 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] font-bold justify-center not-italic relative shrink-0 text-[#0f172a] text-[24px] whitespace-nowrap">
        <p className="leading-none mt-[-1px]">The Gist</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#334155] text-[14px] w-full">
        <p className="leading-[20px]">San Francisco, start your week right with Volo Indoor Recreational Volleyball at ICA! Meet new people, stay active, and enjoy exclusive post-game bar specials in the Mission / Noe Valley.</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px] mt-[-1px]">What You Get</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center relative shrink-0 text-[#013af5] w-0">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[21px] whitespace-pre-wrap">
            <span className="leading-[20px]">&nbsp;</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center relative shrink-0 text-[#71717a] whitespace-nowrap">
        <p className="leading-[20px]">{`Professional league management & team shirts included`}</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center relative shrink-0 text-[#013af5] w-0">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[21px] whitespace-pre-wrap">
            <span className="leading-[20px]">&nbsp;</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center relative shrink-0 text-[#71717a] whitespace-nowrap">
        <p className="leading-[20px]">6 guaranteed games + playoffs for top 4 teams</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center relative shrink-0 text-[#013af5] w-0">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[21px] whitespace-pre-wrap">
            <span className="leading-[20px]">&nbsp;</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center relative shrink-0 text-[#71717a] whitespace-nowrap">
        <p className="leading-[20px]">Social perks and bragging rights prizes</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[6px] items-start leading-[0] not-italic pl-[14px] relative text-[14px] w-full">
        <Item />
        <Item1 />
        <Item2 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Heading2 />
      <List />
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div className="content-stretch flex items-start relative rounded-[16px] shrink-0 w-full" data-name="Background+VerticalBorder">
      <Frame3 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px] mt-[-1px]">Game Details</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center relative shrink-0 text-[#013af5] w-0">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[21px] whitespace-pre-wrap">
            <span className="leading-[20px]">&nbsp;</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center relative shrink-0 text-[#71717a] whitespace-nowrap">
        <p className="leading-[20px]">Games between 8pm - 10pm</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center relative shrink-0 text-[#013af5] w-0">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[21px] whitespace-pre-wrap">
            <span className="leading-[20px]">&nbsp;</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center relative shrink-0 text-[#71717a] whitespace-nowrap">
        <p className="leading-[20px]">Full team Min: 9 players</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center relative shrink-0 text-[#013af5] w-0">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[21px] whitespace-pre-wrap">
            <span className="leading-[20px]">&nbsp;</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center relative shrink-0 text-[#71717a] whitespace-nowrap">
        <p className="leading-[20px]">Duration: 6 Wks + Playoffs</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Source_Sans_Pro:Regular',sans-serif] justify-center relative shrink-0 text-[#013af5] w-0">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[21px] whitespace-pre-wrap">
            <span className="leading-[20px]">&nbsp;</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center relative shrink-0 text-[#71717a] whitespace-nowrap">
        <p className="leading-[20px]">Typically 1 game per night</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[6px] items-start leading-[0] not-italic pl-[14px] relative text-[14px] w-full">
        <Item3 />
        <Item4 />
        <Item5 />
        <Item6 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative flex-1 min-w-0" data-name="Container">
      <Heading3 />
      <List1 />
    </div>
  );
}

function Heading4() {
  return <div className="h-[24px] shrink-0 w-full" data-name="Heading 4" />;
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative flex-1 min-w-0" data-name="Container">
      <Heading4 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container24() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-start gap-3 w-full">
        <Container25 />
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group flex items-center gap-1.5 text-[#013af5] font-bold text-[13.5px] transition-all duration-300 active:scale-95"
        >
          <span>{isExpanded ? 'Show less' : 'Show more'}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-500 ease-in-out ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isExpanded && (
        <div className="flex flex-col gap-[24px] w-full animate-in fade-in slide-in-from-top-2 duration-500">
          <BackgroundVerticalBorder />
          <Container26 />
        </div>
      )}
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading1 />
      <Container24 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[24px] whitespace-nowrap">
        <p className="leading-none mt-[-1px]">Skill Level</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f0fdf4] content-stretch flex flex-col items-start p-[12px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="relative shrink-0 size-[24px]" data-name="Component 3">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
              <path d={svgPaths.pb60700} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_33.33%_33.33%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-50%_-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0001 4.00006">
              <path d={svgPaths.p18fa300} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.5%_62.46%_62.5%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-1px_-9999.77%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
              <path d="M1 1H1.01" id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.5%_37.46%_62.5%_62.5%]" data-name="Vector">
          <div className="absolute inset-[-1px_-9999.77%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
              <path d="M1 1H1.01" id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[24px] mt-[-1px]">Recreational</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro'] justify-center leading-[20px] not-italic relative shrink-0 text-[#475569] text-[14px]">
        <p>Players who have minimal to no experience. Geared toward people who want friendly competition and then head to the bar. Players don't take the game too seriously—it's about the workout and socializing. Great for beginners or those returning to the sport.</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[6.75px] items-start relative shrink-0 flex-1 min-w-0" data-name="Container">
      <Heading6 />
      <Container30 />
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex gap-[16px] items-start px-[25px] py-[28px] relative w-full">
        <Background />
        <Container29 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading5 />
      <BackgroundBorderShadow1 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[24px] whitespace-nowrap">
        <p className="leading-none mt-[-1px]">{`Recreational Perks & Social`}</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row font-['VoloSansPro'] font-bold gap-2 lg:gap-[112px] items-start lg:items-center not-italic relative shrink-0 text-[12px] w-full" data-name="Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[#c7ff10]">
        <p className="leading-tight">The Facility</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#8ca6fa]">
        <p className="leading-tight">Venue perks</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="Component 3">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-5%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10.9999">
              <path d={svgPaths.p37151e80} id="Vector" stroke="var(--stroke-0, #F2F5FE)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_37.5%_45.83%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <path d={svgPaths.peae880} id="Vector" stroke="var(--stroke-0, #F2F5FE)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f2f5fe] text-[0px] whitespace-nowrap">
        <p className="decoration-solid leading-[20px] text-[12px] underline">315 Fair Oaks St</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative w-full" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[157px]">
        <p className="leading-[20px]">Immaculate Conception Academy</p>
      </div>
      <Frame8 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch">
      <Container33 />
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 justify-end" data-name="Item">
      <div className="relative shrink-0 size-[16px]" data-name="Component 3">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-9.09%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8.66667">
              <path d={svgPaths.pb811a00} id="Vector" stroke="#22C55E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[12px] whitespace-nowrap">
        <p className="leading-[20px]">New Facility</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 justify-end" data-name="Item">
      <div className="relative shrink-0 size-[16px]" data-name="Component 3">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-9.09%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8.66667">
              <path d={svgPaths.pb811a00} id="Vector" stroke="#22C55E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[12px] whitespace-nowrap">
        <p className="leading-[20px]">Street Parking</p>
      </div>
    </div>
  );
}



function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-end relative shrink-0 w-full">
      <Item7 />
      <Item8 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-1 h-[72px] items-start justify-end min-h-px min-w-px relative">
      <Frame10 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Frame7 />
      <Frame6 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col items-start opacity-10 p-[16px] right-[-0.32px] top-[0.25px]" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[64px]" data-name="Lucide Icons">
        <div className="absolute inset-[13.48%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.35%_-5.21%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 51.7436">
              <path d={svgPaths.p2e00e400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white w-full relative rounded-[16px] overflow-hidden flex flex-col border border-[#f1f5f9]" data-name="Background+Border">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-24 pb-[28px] pt-[24px] px-[28px] relative w-full h-full z-10 flex-1">

        {/* Left Side: Venue Information */}
        <div className="flex flex-col gap-4 flex-1 items-start justify-center">
          <div className="text-[#013AF5] font-bold text-[12px] tracking-wider mt-[-1px]">The Facility</div>
          <div className="flex flex-col gap-2">
            <h3 className="text-black font-bold text-[17.5px] lg:text-[19px] leading-[1.1] tracking-tight">Immaculate Conception Academy</h3>
            <div className="text-[#64748b] text-[12px] underline underline-offset-4 opacity-80 decoration-[1px]">
              <p>315 Fair Oaks St, San Francisco, CA 94110</p>
            </div>
          </div>
        </div>

        {/* Right Side: Venue Perks */}
        <div className="flex flex-col gap-4 flex-1 items-start justify-center">
          <div className="text-[#013AF5] font-bold text-[12px] tracking-wider mt-[-1px]">Venue perks</div>
          <div className="flex flex-col gap-1.5 items-start">
            <div className="flex items-center gap-2 text-black text-[12px] lg:text-[13px] whitespace-nowrap">
              <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.pb811a00} stroke="#22C55E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
              <p>New Facility</p>
            </div>
            <div className="flex items-center gap-2 text-black text-[12px] lg:text-[13px] whitespace-nowrap">
              <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.pb811a00} stroke="#22C55E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
              <p>Street Parking</p>
            </div>
          </div>
        </div>

      </div>
      {/* Background Icon Decoration: Map Pin */}
      <div className="absolute -top-8 -right-8 opacity-[0.06] p-2 pointer-events-none">
        <svg className="size-[140px]" fill="none" viewBox="0 0 64 64">
          {/* Perfected Map Pin Center: 32,32 */}
          <path d="M32 48c0 0-12-11.834-12-21.333C20 18.01 25.373 14 32 14s12 4.01 12 12.667C44 36.166 32 48 32 48z" stroke="#013af5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <circle cx="32" cy="27" r="4" stroke="#013af5" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-auto" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0034dc] text-[12px] w-full">
        <p className="leading-[16px]">Sponsor Bar Specials</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col h-[42px] items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[24px] mt-[-1px]">Teeth</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[12px]" data-name="Component 3">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-5%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10.9999">
              <path d={svgPaths.p37151e80} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_37.5%_45.83%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <path d={svgPaths.peae880} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[0px] whitespace-nowrap">
        <p className="decoration-solid leading-[20px] text-[12px] underline">2323 Mission St</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[152px]">
      <Heading8 />
      <Container36 />
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#013af5] text-[12px] whitespace-nowrap text-right">
        <p className="leading-[20px]">Specials</p>
      </div>
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 justify-end" data-name="Item">
      <div className="relative shrink-0 size-[16px]" data-name="Component 3">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-9.09%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8.66667">
              <path d={svgPaths.pb811a00} id="Vector" stroke="#22C55E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap text-right">
        <p className="leading-[20px]">Half off Truly buckets</p>
      </div>
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 justify-end" data-name="Item">
      <div className="relative shrink-0 size-[16px]" data-name="Component 3">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-9.09%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8.66667">
              <path d={svgPaths.pb811a00} id="Vector" stroke="#22C55E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap text-right">
        <p className="leading-[20px]">BOGO pitchers</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-between relative shrink-0 w-full">
      <Item10 />
      <Item11 />
      <Item12 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-1 h-[72px] items-start justify-end min-h-px min-w-px relative">
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame9 />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-white w-full relative rounded-[16px] overflow-hidden flex flex-col border border-[#f1f5f9]" data-name="Component 4">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-24 pb-[28px] pt-[24px] px-[28px] relative w-full h-full z-10 flex-1">

        {/* Left Side: Venue Information */}
        <div className="flex flex-col gap-3 flex-1 items-start justify-center">
          <div className="text-[#013AF5] font-bold text-[12px] tracking-wider">Sponsor Bar</div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-black font-bold text-[17px] lg:text-[18px] leading-tight tracking-tight">Teeth</h3>
            <div className="text-[#64748b] text-[12px] underline underline-offset-4 opacity-80 decoration-[1px]">
              <p>2323 Mission St, San Francisco, CA 94110</p>
            </div>
          </div>
        </div>

        {/* Right Side: Specials */}
        <div className="flex flex-col gap-4 flex-1 items-start justify-center">
          <div className="text-[#013AF5] font-bold text-[12px] tracking-wider">Specials</div>
          <div className="flex flex-col gap-1.5 items-start">
            <div className="flex items-center gap-2 text-black text-[12px] lg:text-[13px] whitespace-nowrap">
              <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.pb811a00} stroke="#22C55E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
              <p>Half off Truly buckets</p>
            </div>
            <div className="flex items-center gap-2 text-black text-[12px] lg:text-[13px] whitespace-nowrap">
              <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.pb811a00} stroke="#22C55E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
              <p>BOGO Bud Light pitchers</p>
            </div>
          </div>
        </div>

      </div>
      {/* Background Icon Decoration: Beer Mug */}
      <div className="absolute -top-8 -right-8 opacity-[0.06] p-2 pointer-events-none">
        <svg className="size-[140px]" fill="none" viewBox="0 0 64 64">
          {/* Simple Beer Mug Path or representative icon */}
          <path d="M18 16V44C18 46.2091 19.7909 48 22 48H42C44.2091 48 46 46.2091 46 44V16H18Z" stroke="#013af5" strokeWidth="2.5" />
          <path d="M46 22H52C54.2091 22 56 23.7909 56 26V38C56 40.2091 54.2091 42 52 42H46" stroke="#013af5" strokeWidth="2.5" />
          <path d="M18 12C18 9.79086 19.7909 8 22 8H42C44.2091 8 46 9.79086 46 12V16H18V12Z" stroke="#013af5" strokeWidth="2.5" fill="#013af5" fillOpacity="0.12" />
          <path d="M26 24V40" stroke="#013af5" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M34 24V40" stroke="#013af5" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col items-start opacity-10 p-[16px] right-[-0.34px] top-[0.25px]" data-name="Container">
      <div className="relative shrink-0 size-[64px]" data-name="Component 3">
        <div className="absolute inset-[45.83%_12.5%_29.17%_70.83%]" data-name="Vector">
          <div className="absolute inset-[-15.63%_-23.44%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6667 21">
              <path d={svgPaths.p160d8480} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[37.5%] right-[62.5%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-15.63%_-2.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 21">
              <path d="M2.5 2.5V18.5" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[54.17%] right-[45.83%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-15.63%_-2.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 21">
              <path d="M2.5 2.5V18.5" id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.33%_20.83%_66.67%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-15.63%_-5.86%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.6667 21">
              <path d={svgPaths.p17197280} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.33%_29.17%_8.33%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-6.7%_-7.81%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 42.3333">
              <path d={svgPaths.p6469600} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <Component />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading7 />
      <Container31 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[24px] whitespace-nowrap">
        <p className="leading-none mt-[-1px]">Weekly Schedule</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f2f5fe] content-stretch flex flex-col items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 w-[80px]" data-name="Background">
      <div className="flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Week 1</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[644.66px]" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[24px]">T-Shirt Week - Season Opener</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[16px] relative w-full">
          <Background1 />
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f2f5fe] content-stretch flex flex-col items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 w-[80px]" data-name="Background">
      <div className="flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Week 2-3</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[644.66px]" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Regular Season</p>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[16px] relative w-full">
          <Background2 />
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f2f5fe] content-stretch flex flex-col items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 w-[80px]" data-name="Background">
      <div className="flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Week 4</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[644.66px]" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[24px]">The Kids Week (Charity Focus)</p>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[16px] relative w-full">
          <Background3 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f2f5fe] content-stretch flex flex-col items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 w-[80px]" data-name="Background">
      <div className="flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Week 5-6</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[644.66px]" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
        <p className="leading-[24px]">Regular Season Wrap-up</p>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[16px] relative w-full">
          <Background4 />
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#013af5] content-stretch flex flex-col items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 w-[80px]" data-name="Background">
      <div className="flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">Week 7</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[644.66px]" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#013af5] text-[14px] whitespace-nowrap">
        <p className="leading-[24px]">Playoffs (Top 4)</p>
      </div>
    </div>
  );
}

function OverlayHorizontalBorder() {
  return (
    <div className="bg-[#F2F5FE] relative shrink-0 w-full" data-name="Overlay+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[16px] relative w-full">
          <Background5 />
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <HorizontalBorder />
      <HorizontalBorder1 />
      <HorizontalBorder2 />
      <OverlayHorizontalBorder />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Background+Border">
      <Container38 />
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading9 />
      <BackgroundBorder1 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px]">{`Useful Links & Policies`}</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 relative shrink-0 w-full" data-name="Container">
      <div className="flex gap-[8px] items-center p-[12px] bg-[#f8fafc] rounded-[8px]" data-name="Component 5">
        <div className="relative shrink-0 size-[16px]" data-name="Component 3">
          <div className="absolute inset-[16.67%_8.33%_12.5%_8.33%]" data-name="Vector">
            <div className="absolute inset-[-5.88%_-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 12.6666">
                <path d={svgPaths.p22c92800} id="Vector" stroke="var(--stroke-0, #334155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Giving Back</p>
        </div>
      </div>
      <div className="flex gap-[8px] items-center p-[12px] bg-[#f8fafc] rounded-[8px]" data-name="Component 5">
        <div className="relative shrink-0 size-[16px]" data-name="Component 3">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
                <path d={svgPaths.p3d62dd80} id="Vector" stroke="var(--stroke-0, #334155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[29.15%_37.83%_45.83%_37.87%]" data-name="Vector">
            <div className="absolute inset-[-16.65%_-17.15%_-16.66%_-17.16%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.22018 5.3365">
                <path d={svgPaths.pb91f080} id="Vector" stroke="var(--stroke-0, #334155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]" data-name="Vector">
            <div className="absolute inset-[-0.67px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34 1.33333">
                <path d="M0.666667 0.666667H0.673334" id="Vector" stroke="var(--stroke-0, #334155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">FAQ/Support</p>
        </div>
      </div>
      <div className="flex gap-[8px] items-center p-[12px] bg-[#f8fafc] rounded-[8px]" data-name="Component 5">
        <div className="relative shrink-0 size-[16px]" data-name="Component 3">
          <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
            <div className="absolute inset-[-5%_-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.6667">
                <path d={svgPaths.p15c29000} id="Vector" stroke="var(--stroke-0, #334155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Forfeits Policy</p>
        </div>
      </div>
      <div className="flex gap-[8px] items-center p-[12px] bg-[#f8fafc] rounded-[8px]" data-name="Component 5">
        <div className="relative shrink-0 size-[16px]" data-name="Component 3">
          <div className="absolute inset-[8.33%_9.38%]" data-name="Vector">
            <div className="absolute inset-[-5%_-5.13%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3305 14.6667">
                <path d={svgPaths.p210edd00} id="Vector" stroke="var(--stroke-0, #334155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Jersey Policy</p>
        </div>
      </div>
      <div className="flex gap-[8px] items-center p-[12px] bg-[#f8fafc] rounded-[8px]" data-name="Component 5">
        <div className="relative shrink-0 size-[16px]" data-name="Component 3">
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <div className="absolute inset-[-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                <path d={svgPaths.p252ee980} id="Vector" stroke="var(--stroke-0, #334155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[12.5%_66.67%_66.67%_12.5%]" data-name="Vector">
            <div className="absolute inset-[-20%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66667 4.66667">
                <path d="M0.666667 0.666667V4H4" id="Vector" stroke="var(--stroke-0, #334155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Refund Policy</p>
        </div>
      </div>
      <div className="flex gap-[8px] items-center p-[12px] bg-[#f8fafc] rounded-[8px]" data-name="Component 5">
        <div className="relative shrink-0 size-[16px]" data-name="Component 3">
          <div className="absolute inset-[7.47%_7.47%_7.47%_7.47%]" data-name="Vector">
            <div className="absolute inset-[-4.63%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p210edd00} id="Vector" stroke="var(--stroke-0, #334155)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['VoloSansPro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">Weather Policy</p>
        </div>
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start py-[32px] relative shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Heading10 />
      <Container45 />
    </div>
  );
}

function Container11({ isOn, activeTab, setTab, phase, setPhase }: { isOn: boolean; activeTab: string; setTab: (t: string) => void; phase: string; setPhase: (p: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[36px] lg:gap-[48px] items-start relative flex-1 min-w-0 w-full" data-name="Container">
      {/* What's a Rental? */}
      <section className="flex flex-col gap-4 w-full">
        <h2 className="text-[20px] lg:text-[24px] font-['VoloSansPro:Bold',sans-serif] font-bold text-[#0f172a] tracking-tight">What's a Rental?</h2>
        <p className="text-[14px] leading-relaxed text-[#334155] font-['VoloSansPro:Regular',sans-serif]">
          Calling all friends, family, and teammates — it's game time! You can now rent private pickleball courts at Club Volo Brewer's Hill. Whether you're planning a fun match with friends or organizing a team outing, our courts are ready.
        </p>

        {/* Info Alert */}
        <div className="bg-[#fff1f2] rounded-xl p-5 mt-2">
          <div className="flex items-center gap-2 mb-1.5 text-[#e11d48]">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="font-['VoloSansPro:Bold',sans-serif] font-bold text-[14px]">Important Reminder</span>
          </div>
          <p className="text-[13px] text-[#e11d48] font-['VoloSansPro:Regular',sans-serif] leading-relaxed max-w-[90%]">
            Once you complete your booking, please share the registration link with everyone in your group. <strong className="font-['VoloSansPro:Bold',sans-serif]">Each guest must complete a digital release of liability waiver before arriving!</strong> No waiver = no entry to Club Volo.
          </p>
        </div>
      </section>

      {/* Hours & Rates */}
      <section className="flex flex-col gap-4 w-full">
        <h2 className="text-[20px] lg:text-[24px] font-['VoloSansPro:Bold',sans-serif] font-bold text-[#0f172a] tracking-tight">Hours &amp; Rates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Standard Pricing Card */}
          <div className="bg-white rounded-[16px] p-6 shadow-sm border border-[#e2e8f0] flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h3 className="font-['VoloSansPro:Bold',sans-serif] font-bold text-[14px] text-[#0f172a]">Standard Pricing</h3>
              <div className="flex items-baseline gap-1 text-[#013af5]">
                <span className="text-[24px] font-black tracking-tight leading-none">$25</span>
                <span className="text-[12px] font-medium leading-none opacity-80">/hr</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-[13px] font-['VoloSansPro:Regular',sans-serif] mt-auto">
              <div className="flex justify-between items-center pb-3 border-b border-[#f1f5f9]">
                <span className="text-[#94a3b8] font-medium">Weekdays</span>
                <span className="text-[#0f172a] font-bold">Before 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#f1f5f9]">
                <span className="text-[#94a3b8] font-medium">Saturday</span>
                <span className="text-[#0f172a] font-bold">2:00 PM - 5:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#94a3b8] font-medium">Sunday</span>
                <span className="text-[#0f172a] font-bold">2:00 PM - 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Prime Time Pricing Card */}
          <div className="bg-[#013af5] rounded-[16px] p-6 shadow-md shadow-[#013af5]/20 flex flex-col gap-6 relative overflow-hidden">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute top-4 right-4 size-20 text-white/5 opacity-40">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
            <div className="flex flex-col gap-1 relative z-10">
              <h3 className="font-['VoloSansPro:Bold',sans-serif] font-bold text-[14px] text-white">Prime Time Pricing</h3>
              <div className="flex items-baseline gap-1 text-[#c7ff10]">
                <span className="text-[24px] font-black tracking-tight leading-none">$50</span>
                <span className="text-[12px] font-medium leading-none opacity-80">/hr</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-[13px] font-['VoloSansPro:Regular',sans-serif] relative z-10 mt-auto">
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <span className="text-white/80 font-medium">Weeknights</span>
                <span className="text-white font-bold">6:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <span className="text-white/80 font-medium">Saturday</span>
                <span className="text-white font-bold">10:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80 font-medium">Sunday</span>
                <span className="text-white font-bold">10:00 AM - 2:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Facility */}
      <section className="flex flex-col gap-4 w-full">
        <h2 className="text-[20px] lg:text-[24px] font-['VoloSansPro:Bold',sans-serif] font-bold text-[#0f172a] tracking-tight">The Facility</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {[
            { label: 'Bar On Site', icon: <Beer className="size-[26px]" strokeWidth={2} /> },
            { label: 'Lights', icon: <Lightbulb className="size-[26px]" strokeWidth={2} /> },
            { label: 'Free Parking', icon: <Car className="size-[26px]" strokeWidth={2} /> },
            { label: 'New Facility', icon: <Sparkles className="size-[26px]" strokeWidth={2} /> },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-[#f1f5f9] px-2 py-5 flex flex-col items-center justify-center gap-3 rounded-[16px]">
              <div className="text-[#013af5]">
                {item.icon}
              </div>
              <span className="font-['VoloSansPro:Bold',sans-serif] font-bold text-[11px] text-[#0f172a] text-center tracking-wide leading-none">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Getting There */}
      <section className="flex flex-col gap-4 w-full">
        <h2 className="text-[20px] lg:text-[24px] font-['VoloSansPro:Bold',sans-serif] font-bold text-[#0f172a] tracking-tight">Getting There</h2>
        <div className="bg-transparent lg:bg-white rounded-none lg:rounded-[16px] border-none lg:border lg:border-[#f1f5f9] lg:p-6 flex flex-col gap-4 text-[14px] leading-relaxed font-['VoloSansPro:Regular',sans-serif] text-[#0f172a]">
          <p>
            <strong className="font-['VoloSansPro:Bold',sans-serif]">Driving:</strong> Free parking is available at Canton Crossing, right in the lot outside Crunch Fitness.
          </p>
          <p>
            <strong className="font-['VoloSansPro:Bold',sans-serif]">Bike/Scooter:</strong> Ride right up and park in our newly installed bike racks!
          </p>

          {/* Custom Drawn Map */}
          <div className="w-full mt-4 rounded-[12px] bg-[#f1f5f9] overflow-hidden border border-[#e2e8f0] relative h-[380px] lg:h-[460px] flex px-4 pb-4 pt-10 gap-2">

            {/* Left Block (Turf Fields) */}
            <div className="flex-1 bg-[#6ee7b7] rounded-sm flex items-center justify-center relative">
              <div className="bg-[#064e3b]/80 px-2 py-1 rounded text-white text-[9px] font-bold uppercase text-center leading-tight shadow-sm">
                COMING SOON! TURF<br />FIELDS!
              </div>
            </div>

            {/* Right Blocks Area */}
            <div className="flex-1 flex flex-col justify-between ml-2 gap-4">
              {/* Top Courts Row */}
              <div className="flex gap-2 h-[35%] w-full">
                <div className="flex gap-1 w-[40%]">
                  <div className="flex-1 bg-[#fcd34d] rounded-sm border-2 border-[#b45309] flex items-center justify-center p-1"><span className="text-[#1e3a8a] font-bold text-[8px] bg-[#93c5fd] px-1 rounded">Volleyball<br />Court 2</span></div>
                  <div className="flex-1 bg-[#fcd34d] rounded-sm border-2 border-[#b45309] flex items-center justify-center p-1"><span className="text-[#1e3a8a] font-bold text-[8px] bg-[#93c5fd] px-1 rounded">Volleyball<br />Court 1</span></div>
                </div>
                <div className="flex-1 bg-[#93c5fd] rounded-sm flex items-center justify-center gap-2 px-2">
                  <div className="flex-1 h-2/3 border border-white/40 border-dashed rounded-sm flex items-center justify-center"><span className="text-white font-bold text-[8px] bg-[#1e3a8a] px-1 rounded">Pickleball<br />Court 2</span></div>
                  <div className="flex-1 h-2/3 border border-white/40 border-dashed rounded-sm flex items-center justify-center"><span className="text-white font-bold text-[8px] bg-[#1e3a8a] px-1 rounded">Pickleball<br />Court 1</span></div>
                </div>
              </div>

              {/* Bottom Courts Row */}
              <div className="flex gap-2 h-[35%] w-full">
                <div className="flex gap-1 w-[25%] mt-auto h-[80%]">
                  <div className="flex-1 bg-[#fcd34d] rounded-sm border-2 border-[#b45309] flex items-center justify-center p-1"><span className="text-[#1e3a8a] font-bold text-[6px] bg-[#93c5fd] px-1 rounded text-center">Volleyball<br />Court 4</span></div>
                  <div className="flex-1 bg-[#fcd34d] rounded-sm border-2 border-[#b45309] flex items-center justify-center p-1"><span className="text-[#1e3a8a] font-bold text-[6px] bg-[#93c5fd] px-1 rounded text-center">Volleyball<br />Court 3</span></div>
                </div>
                <div className="flex-1 bg-[#93c5fd] rounded-sm flex items-center justify-center gap-1.5 px-2 mt-auto h-[80%]">
                  {[4, 3, 5, 6].map(num => (
                    <div key={num} className="flex-1 h-[80%] border border-white/40 border-dashed rounded-sm flex items-center justify-center p-0.5">
                      <span className="text-white font-bold text-[6px] bg-[#1e3a8a] px-0.5 rounded text-center leading-[1.1]">Pickleball<br />Court {num}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute right-4 top-1/2 flex items-center text-[8px] font-bold text-gray-500 uppercase tracking-widest gap-1 rotate-90 origin-right">
              Entrance
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-3 -rotate-90">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

function RegistrationExplainer() {
  const cards = [
    { id: 'solo', title: "Solo", sub: "Volo finds you a team.", icon: iconSolo },
    { id: 'friends', title: "Friends", sub: "Unique SMS link. Separate signup.", icon: iconFriends },
    { id: 'team', title: "Team", sub: "Prepay for the whole roster.", icon: iconTeam }
  ];

  return (
    <div className="grid grid-cols-3 gap-2 w-full">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white border border-[#f1f5f9] p-3 rounded-[16px] text-left flex flex-col h-full"
        >
          <div className="mb-2">
            <img src={card.icon} alt={card.title} className="size-7" />
          </div>
          <h3 className="font-['VoloSansPro'] font-bold text-[18px] mb-1 text-black leading-tight tracking-tight">{card.title}</h3>
          <p className="font-['VoloSansPro'] text-[13px] text-[#64748b] font-medium leading-[1.2]">{card.sub}</p>
        </div>
      ))}
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-none">Registration closes 01/26</p>
      </div>
    </div>
  );
}

function Container47({ isOn, onClick }: { isOn: boolean; onClick: () => void }) {
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={onClick}>
      <span className="font-['VoloSansPro'] font-medium text-[12px] text-white/80">Incl. Fees</span>
      <div
        className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-colors duration-200 ease-in-out ${isOn ? 'bg-white/50' : 'bg-white/30'}`}
      >
        <div className={`bg-white w-4 h-4 rounded-full shadow-sm transform transition-transform duration-200 ease-in-out ${isOn ? 'translate-x-4' : 'translate-x-0'}`} />
      </div>
    </div>
  );
}

function Background6({ isOn, setIsOn }: { isOn: boolean; setIsOn: (val: boolean) => void }) {
  return (
    <div className="bg-[#013af5] relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Heading11 />
          <Container47 isOn={isOn} onClick={() => setIsOn(!isOn)} />
        </div>
      </div>
    </div>
  );
}

function Text({ active, label }: { active: boolean; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center relative w-full" data-name="text">
      <div className={`flex flex-col font-['VoloSansPro'] justify-center leading-none not-italic relative shrink-0 text-[14px] text-center w-full transition-all duration-200 ${active ? 'font-bold text-black' : 'font-medium text-[#64748b]'}`}>
        <p className="mt-[-1px]">{label}</p>
      </div>
    </div>
  );
}

function Tab({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <div
      className={`flex-1 relative rounded-full cursor-pointer transition-all duration-200 ${active ? 'bg-white shadow-sm' : 'bg-transparent'}`}
      onClick={onClick}
      data-name="tab"
    >
      <div className="flex items-center justify-center px-3 py-2 relative w-full h-full">
        <Text active={active} label={label} />
      </div>
    </div>
  );
}

/* Removed Tab1 and Tab2 as they are now unified under the Tab component */

function Tabs({ activeTab, setTab }: { activeTab: string; setTab: (t: string) => void }) {
  return (
    <div className="bg-[#f1f5f9] min-h-[40px] relative rounded-full shrink-0 w-full" data-name="tabs">
      <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] p-[4px] relative w-full">
          <Tab active={activeTab === 'solo'} onClick={() => setTab('solo')} label="Solo" />
          <Tab active={activeTab === 'friends'} onClick={() => setTab('friends')} label="Friends" />
          <Tab active={activeTab === 'team'} onClick={() => setTab('team')} label="Team" />
        </div>
      </div>
    </div>
  );
}

function Frame13({ activeTab }: { activeTab: string }) {
  const subtitles = {
    solo: "Volo finds you a team.",
    friends: "Send a unique link, and sign up separately.",
    team: "Prepay for the whole roster."
  };

  return (
    <div className="content-stretch flex flex-col font-['VoloSansPro'] items-center relative shrink-0 whitespace-nowrap w-full -mt-2">
      <div className="flex flex-col justify-center relative shrink-0 text-[#64748b] text-[13px] text-center font-normal mb-1">
        <p className="leading-[20px]">{subtitles[activeTab as keyof typeof subtitles]}</p>
      </div>
    </div>
  );
}

function TimelineCircle({ state, variant, onClick }: { state: 'active' | 'past' | 'future'; variant: 'early' | 'standard'; onClick: () => void }) {
  const isEarly = variant === 'early';
  const color = isEarly ? "#16a34a" : "#013AF5";

  if (state === 'active') {
    return (
      <div className="relative shrink-0 size-[24px] cursor-pointer group" onClick={onClick}>
        {/* Outer Ring */}
        <div
          className="absolute inset-x-[-1px] inset-y-[-1px] rounded-full bg-white border-[1.5px] border-white shadow-[0_0_0_2px_var(--ring-color),0_4px_8px_rgba(0,0,0,0.12)]"
          style={{ '--ring-color': color } as any}
        />
        {/* Inner Circle */}
        <div
          className="absolute inset-[3px] rounded-full shadow-inner"
          style={{ backgroundColor: color }}
        />
      </div>
    );
  }

  // Hollow states
  const ringColor = (isEarly && state === 'past') ? "#16a34a" : "#e2e8f0";
  return (
    <div
      className="relative shrink-0 size-[24px] cursor-pointer group flex items-center justify-center"
      onClick={onClick}
    >
      <div
        className="size-[20px] rounded-full bg-white border-[1.5px] border-white shadow-[0_0_0_2.5px_var(--ring-color),0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300"
        style={{ '--ring-color': ringColor } as any}
      />
    </div>
  );
}

function TimelineLabel({ active, label, variant, onClick }: { active: boolean; label: string; variant: 'early' | 'standard'; onClick: () => void }) {
  let color = '#94a3b8';
  if (variant === 'early') {
    color = '#16a34a';
  } else if (active) {
    color = '#000000';
  }

  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 pt-3 cursor-pointer" onClick={onClick}>
      <span
        className="font-['VoloSansPro'] font-semibold text-[12px] leading-tight text-center transition-colors duration-200"
        style={{ color }}
      >
        {label}
      </span>
    </div>
  );
}

function Container50({ phase, setPhase }: { phase: string; setPhase: (p: string) => void }) {
  const isEarlyBird = phase === 'early-bird';
  const isRegular = phase === 'regular';
  const isLastChance = phase === 'last-chance';

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full px-2" data-name="Container">
      {/* Background Track */}
      <div className="absolute h-[6px] left-0 right-0 rounded-full top-[9px] overflow-hidden bg-[#f1f5f9]" data-name="Background">
        {/* Green Segment (Early Bird Zone) */}
        <div className="absolute left-0 w-[24%] h-full bg-[#16a34a]" />
      </div>

      <div className="relative shrink-0 w-full z-10 mt-[2px]" data-name="Container">
        <div className="content-stretch flex items-start justify-between relative w-full">
          {/* Early Bird */}
          <div className="flex flex-col items-center relative">
            <TimelineCircle
              state={isEarlyBird ? 'active' : 'past'}
              variant="early"
              onClick={() => setPhase('early-bird')}
            />
            <TimelineLabel active={isEarlyBird} variant="early" label="Early Bird" onClick={() => setPhase('early-bird')} />
          </div>

          {/* Regular */}
          <div className="flex flex-col items-center relative">
            <TimelineCircle
              state={isRegular ? 'active' : (isLastChance ? 'past' : 'future')}
              variant="standard"
              onClick={() => setPhase('regular')}
            />
            <TimelineLabel active={isRegular} variant="standard" label="Regular" onClick={() => setPhase('regular')} />
          </div>

          {/* Last Chance */}
          <div className="flex flex-col items-center relative">
            <TimelineCircle
              state={isLastChance ? 'active' : 'future'}
              variant="standard"
              onClick={() => setPhase('last-chance')}
            />
            <TimelineLabel active={isLastChance} variant="standard" label="Last Chance" onClick={() => setPhase('last-chance')} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container57({ isOn, activeTab, phase }: { isOn: boolean; activeTab: string; phase: string }) {
  const isRegular = phase === 'regular';
  const isLastChance = phase === 'last-chance';
  let price = 110.00;

  if (activeTab === 'team') {
    price = isLastChance ? 992.28 : (isRegular ? 982.28 : 917.78);
  } else {
    price = isLastChance ? 135.00 : (isRegular ? 125.00 : 110.00);
  }

  // Application of fee multiplier (matching mockups approx)
  const finalPrice = isOn ? (price * 1.08136) : price;
  const priceStr = `$${finalPrice.toFixed(2)}`;

  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] text-right whitespace-nowrap">
        <p className="leading-[28px]">{priceStr}</p>
      </div>
    </div>
  );
}

function Container56({ isOn, activeTab, phase }: { isOn: boolean; activeTab: string; phase: string }) {
  const labels = {
    solo: "Solo",
    friends: "Per player",
    team: "Prepay"
  };

  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black whitespace-nowrap">
        <p className="leading-[24px]">{labels[activeTab as keyof typeof labels]}</p>
      </div>
      <Container57 isOn={isOn} activeTab={activeTab} phase={phase} />
    </div>
  );
}

function Frame14({ phase, activeTab }: { phase: string; activeTab: string }) {
  const isRegular = phase === 'regular';
  const isLastChance = phase === 'last-chance';

  let saveAmount = "$15";
  if (isLastChance) {
    saveAmount = activeTab === 'team' ? "$85.25" : "$25";
  } else if (activeTab === 'team') {
    saveAmount = "$75.25";
  }

  let bgClass = "bg-[#dcfce7]";
  let textClass = "text-[#16a34a]";
  let pillText = "Early Bird";

  if (isLastChance) {
    bgClass = "bg-[#fee2e2]";
    textClass = "text-[#ef4444]";
    pillText = `Save ${saveAmount} now`;
  } else if (isRegular) {
    bgClass = "bg-[#ffedd5]";
    textClass = "text-[#f97316]";
    pillText = `Save ${saveAmount} now`;
  }

  return (
    <div className={`content-stretch flex flex-col items-center justify-center px-[12px] py-[4px] relative rounded-full shrink-0 transition-colors duration-200 ${bgClass}`}>
      <div className={`flex flex-col font-['VoloSansPro'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] whitespace-nowrap ${textClass}`}>
        <p className="leading-[16px]">{pillText}</p>
      </div>
    </div>
  );
}

function Container59({ phase, activeTab }: { phase: string; activeTab: string }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Frame14 phase={phase} activeTab={activeTab} />
    </div>
  );
}

function Container60({ phase }: { phase: string }) {
  const isRegular = phase === 'regular';
  const isLastChance = phase === 'last-chance';

  let text = "Price ends Dec 12";
  let textColor = "text-[#f97316]";
  let bgColor = "bg-[#ffedd5]";

  if (isLastChance) {
    text = "Closes Jan 26";
    textColor = "text-[#ef4444]";
    bgColor = "bg-[#fee2e2]";
  } else if (isRegular) {
    text = "Price ends Jan 12";
  }

  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className={`content-stretch flex flex-col items-center justify-center px-[12px] py-[4px] relative rounded-full shrink-0 transition-colors duration-200 ${bgColor}`}>
        <div className={`flex flex-col font-['VoloSansPro'] font-bold justify-center leading-[0] not-italic relative shrink-0 ${textColor} text-[12px] whitespace-nowrap`}>
          <p className="leading-[16px]">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Container58({ phase, activeTab }: { phase: string; activeTab: string }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[0.01px] relative w-full">
          <Container59 phase={phase} activeTab={activeTab} />
          <Container60 phase={phase} />
        </div>
      </div>
    </div>
  );
}

function Component2({ isOn, activeTab, phase }: { isOn: boolean; activeTab: string; phase: string }) {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Component 7">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[16px] relative w-full">
        <Container56 isOn={isOn} activeTab={activeTab} phase={phase} />
        <Container58 phase={phase} activeTab={activeTab} />
      </div>
    </div>
  );
}

function Component1({ activeTab }: { activeTab: string }) {
  const labels = {
    solo: "Register - Solo",
    friends: "Register - Friends",
    team: "Register - Team"
  };

  return (
    <div className="bg-[#013af5] content-stretch flex items-center justify-center overflow-clip py-[14px] relative rounded-[12px] shrink-0 w-full cursor-pointer hover:bg-[#002bb5] transition-colors duration-200" data-name="Component 4">
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">{labels[activeTab as keyof typeof labels]}</p>
      </div>
    </div>
  );
}

function Container55({ isOn, activeTab, phase }: { isOn: boolean; activeTab: string; phase: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Component2 isOn={isOn} activeTab={activeTab} phase={phase} />
      <Component1 activeTab={activeTab} />
    </div>
  );
}

function Container49({ isOn, activeTab, setTab, phase, setPhase }: { isOn: boolean; activeTab: string; setTab: (t: string) => void; phase: string; setPhase: (p: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative shrink-0 w-full" data-name="Container">
      <Tabs activeTab={activeTab} setTab={setTab} />
      <Frame13 activeTab={activeTab} />
      <Container50 phase={phase} setPhase={setPhase} />
      <Container55 isOn={isOn} activeTab={activeTab} phase={phase} />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro'] font-bold justify-center leading-tight not-italic relative shrink-0 text-[#0f172a] text-[13px] text-center w-full">
        <p className="mb-0.5">Joining a friend’s group?</p>
      </div>
      <div className="flex flex-col font-['VoloSansPro'] justify-center leading-snug not-italic relative shrink-0 text-[#64748b] text-[13px] text-center w-full">
        <p>Use their unique invite link to play together.</p>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start py-[24px] px-[24px] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <Container61 />
    </div>
  );
}

function EarlyBirdSoloPresenter({ isOn, setIsOn, activeTab, setTab, phase, setPhase }: { isOn: boolean; setIsOn: (val: boolean) => void; activeTab: string; setTab: (t: string) => void; phase: string; setPhase: (p: string) => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(30,58,138,0.05),0px_8px_10px_-6px_rgba(30,58,138,0.05)] shrink-0 w-full" data-name="Early Bird - Solo">
      <Background6 isOn={isOn} setIsOn={setIsOn} />
      <Container49 isOn={isOn} activeTab={activeTab} setTab={setTab} phase={phase} setPhase={setPhase} />
      <BackgroundHorizontalBorder />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[20.64px] pr-[20.65px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
        <p className="mb-0">Secure</p>
        <p>Checkout</p>
      </div>
    </div>
  );
}

function BadgeDollarSign() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="badge-dollar-sign 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="badge-dollar-sign 1">
          <path d={svgPaths.p3d768d80} id="Vector" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3836560} id="Vector_2" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 18V6" id="Vector_3" stroke="var(--stroke-0, #013AF5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex gap-[16px] h-[76px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[8px] self-stretch shrink-0 w-[113.77px]" data-name="Component 9">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-center p-[8px] relative size-full">
            <div className="relative shrink-0 size-[24px]" data-name="Component 3">
              <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
                <div className="absolute inset-[-5%_-6.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22.0034">
                    <path d={svgPaths.p27979bf0} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[41.67%_37.5%]" data-name="Vector">
                <div className="absolute inset-[-25%_-16.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 6">
                    <path d="M1 3L3 5L7 1" id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
            <Container63 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[8px] self-stretch shrink-0 w-[113.77px]" data-name="Component 9">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-center p-[8px] relative size-full">
            <BadgeDollarSign />
            <div className="flex flex-col font-['VoloSansPro:Bold',sans-serif] justify-center leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap whitespace-pre">
              <p className="mb-0">{`Early Bird `}</p>
              <p>Pricing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RentalsPricingCard({ isMobileModal = false }: { isMobileModal?: boolean }) {
  const [activeDate, setActiveDate] = useState('16');
  const [activeSlot, setActiveSlot] = useState<string | null>(null);

  const dates = [
    { label: 'TODAY', num: '16' },
    { label: 'FRI', num: '17' },
    { label: 'SAT', num: '18' },
    { label: 'SUN', num: '19' },
  ];

  // Fake slot generation based on date
  const getSlotsForDate = (dateNum: string) => {
    switch (dateNum) {
      case '16':
        return [
          { time: '3:00 PM', price: '$25', status: 'available' },
          { time: '4:00 PM', price: '$25', status: 'available' },
          { time: '5:00 PM', status: 'booked' },
          { time: '6:00 PM', price: '$50', status: 'available' },
        ];
      case '17':
        return [
          { time: '4:00 PM', price: '$25', status: 'available' },
          { time: '5:00 PM', price: '$25', status: 'available' },
          { time: '6:00 PM', status: 'booked' },
          { time: '7:00 PM', price: '$50', status: 'available' },
        ];
      case '18':
        return [
          { time: '9:00 AM', price: '$50', status: 'available' },
          { time: '10:00 AM', status: 'booked' },
          { time: '11:00 AM', price: '$50', status: 'available' },
          { time: '12:00 PM', price: '$50', status: 'available' },
          { time: '2:00 PM', price: '$25', status: 'available' },
        ];
      case '19':
        return [
          { time: '10:00 AM', price: '$50', status: 'available' },
          { time: '11:00 AM', price: '$50', status: 'available' },
          { time: '2:00 PM', price: '$25', status: 'available' },
          { time: '3:00 PM', status: 'booked' },
        ];
      default:
        return [];
    }
  };

  const currentSlots = getSlotsForDate(activeDate);

  return (
    <div className={`flex flex-col w-full gap-3 ${isMobileModal ? 'mt-0' : 'mt-[-10px]'}`}>
      <div className={`bg-white flex flex-col items-center overflow-clip relative w-full ${isMobileModal ? 'shadow-none border-0 rounded-none' : 'rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(30,58,138,0.05),0px_8px_10px_-6px_rgba(30,58,138,0.05)] border border-[#f1f5f9]'}`}>

        {/* Header - Always visible */}
        <div className="bg-[#013af5] w-full px-6 py-6 flex flex-col gap-1 items-start text-left">
          <h3 className="text-white font-['VoloSansPro:Bold',sans-serif] font-bold text-[18px] tracking-wide m-0 leading-[1.1]">Book a Court</h3>
          <p className="text-white/90 font-['VoloSansPro:Regular',sans-serif] text-[13px] m-0 tracking-wide mt-0.5">Select your time to see exact pricing</p>
        </div>

        {/* Pricing Area */}
        <div className={`py-7 px-6 flex flex-col items-center w-full gap-3 ${isMobileModal ? '' : 'border-b border-[#f1f5f9]'}`}>
          <div className="flex items-baseline gap-1 text-[#0f172a]">
            {activeSlot ? (
              <>
                <span className="text-[28px] font-black font-['VoloSansPro:Bold',sans-serif] tracking-tight leading-none">
                  {currentSlots.find(s => s.time === activeSlot)?.price}
                </span>
                <span className="text-[13px] font-bold leading-none opacity-40 font-['VoloSansPro:Bold',sans-serif]">/hr</span>
              </>
            ) : (
              <>
                <span className="text-[28px] font-black font-['VoloSansPro:Bold',sans-serif] tracking-tight leading-none">$25 - $50</span>
                <span className="text-[13px] font-bold leading-none opacity-40 font-['VoloSansPro:Bold',sans-serif]">/hr</span>
              </>
            )}

          </div>
          <div className="bg-[#fef9c3] text-[#a16207] flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-[6px] w-auto">
            <Crown size={14} strokeWidth={2.5} />
            <span className="font-['VoloSansPro:Bold',sans-serif] font-bold text-[10px] leading-none tracking-wider mt-[1px]">MEMBERS: $12.50 - $25/HR</span>
          </div>
        </div>

        {/* Date / Time */}
        <div className="p-6 flex flex-col w-full gap-6">
          <div className="flex flex-col gap-3 w-full items-start">
            <span className="font-['VoloSansPro:Regular',sans-serif] text-[12px] text-[#475569]">Select Date</span>
            <div className="grid grid-cols-4 gap-2 w-full">
              {dates.map((d, i) => {
                const isActive = d.num === activeDate;
                return (
                  <button
                    key={i}
                    onClick={() => { setActiveDate(d.num); setActiveSlot(null); }}
                    className={`flex flex-col items-center py-2.5 rounded-[8px] transition-colors border ${isActive ? 'bg-[#013af5] border-[#013af5] text-white shadow-sm' : 'bg-white border-[#e2e8f0] text-[#64748b] hover:border-[#cbd5e1]'}`}
                  >
                    <span className={`text-[10px] font-bold tracking-wider leading-none mb-1 ${isActive ? 'text-white/80' : 'text-[#94a3b8]'}`}>{d.label}</span>
                    <span className={`text-[16px] font-black leading-none ${isActive ? 'text-white' : 'text-[#0f172a]'}`}>{d.num}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full items-start">
            <span className="font-['VoloSansPro:Regular',sans-serif] text-[12px] text-[#475569]">Available Slots</span>
            <div className="grid grid-cols-2 gap-2 w-full">
              {currentSlots.map((s, i) => {
                const isBooked = s.status === 'booked';
                const isActiveSlot = s.time === activeSlot;

                return (
                  <button
                    key={i}
                    disabled={isBooked}
                    onClick={() => !isBooked && setActiveSlot(s.time)}
                    className={`flex items-center justify-center py-3 rounded-[8px] transition-all border text-[12px] font-bold font-['VoloSansPro:Bold',sans-serif] 
                      ${isBooked ? 'bg-[#f8fafc] border-[#f1f5f9] text-[#cbd5e1] cursor-not-allowed' :
                        isActiveSlot ? 'bg-[#c7ff10] border-[#b0eb00] text-[#0f172a] shadow-sm transform scale-[1.02]' :
                          'bg-white border-[#e2e8f0] text-[#64748b] hover:border-[#cbd5e1] hover:text-[#0f172a] shadow-[0_2px_4px_rgba(0,0,0,0.02)]'}`
                    }
                  >
                    {s.time} {isBooked ? '(Booked)' : `(${s.price})`}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:flex w-full mt-2">
            <button className="w-full bg-[#013af5] hover:bg-[#002bb5] text-white py-3.5 rounded-[12px] font-bold font-['VoloSansPro:Bold',sans-serif] text-[15px] flex items-center justify-center gap-2 transition-colors shadow-sm">
              Book Court <ArrowRight size={16} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>

      {/* Disclaimer Text: Hidden inside the card on mobile, handled separately via fixed footer */}
      <p className="hidden lg:block text-center text-[11px] font-['VoloSansPro:Regular',sans-serif] text-[#94a3b8] px-4 w-full">
        You will receive booking info in the Volo App and via email.
      </p>
    </div>
  );
}

function Container46({ isOn, setIsOn, activeTab, setTab, phase, setPhase }: { isOn: boolean; setIsOn: (val: boolean) => void; activeTab: string; setTab: (t: string) => void; phase: string; setPhase: (p: string) => void }) {
  return (
    <div className="hidden lg:flex flex-col shrink-0 w-full lg:w-[373.33px] relative" data-name="Container">
      <div className="sticky top-[100px] flex flex-col gap-[16px] items-start self-start pb-[100px] w-full">
        <RentalsPricingCard />
      </div>
    </div>
  );
}

function Main({ isOn, setIsOn, activeTab, setTab, phase, setSetPhase }: { isOn: boolean; setIsOn: (val: boolean) => void; activeTab: string; setTab: (t: string) => void; phase: string; setSetPhase: (p: string) => void }) {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-[32px] lg:gap-[48px] justify-center relative shrink-0 w-full px-6 lg:px-0 mt-6 lg:mt-8 pb-12" data-name="Main">
      <Container11 isOn={isOn} activeTab={activeTab} setTab={setTab} phase={phase} setPhase={setSetPhase} />
      <Container46 isOn={isOn} setIsOn={setIsOn} activeTab={activeTab} setTab={setTab} phase={phase} setPhase={setSetPhase} />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center py-[30px] relative shrink-0 w-full overflow-hidden" data-name="Footer">
      <div className="relative shrink-0 w-full max-w-[1168px] px-6" data-name="image 4">
        {/* Desktop version */}
        <img alt="" className="hidden lg:block w-full h-auto object-contain" src={imgImage4} />
        {/* Mobile version */}
        <img alt="" className="block lg:hidden w-full h-auto object-contain px-4" src={imgMobilFooter} />
      </div>
    </div>
  );
}


function MobileFixedNextButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#e2e8f0] p-4 z-50 shadow-[0_-8px_20px_rgba(0,0,0,0.06)]">
      <div className="max-w-lg mx-auto">
        <button
          onClick={onClick}
          className="w-full bg-[#013af5] hover:bg-[#0034dc] text-white font-['VoloSansPro'] font-bold text-[16px] py-4 rounded-[16px] shadow-lg shadow-[#013af5]/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          Next
          <ArrowRight size={20} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}

function HowYoullPlay() {
  return (
    <div className="bg-[#0034DC] w-full py-16 lg:py-24 relative overflow-hidden" data-name="How You'll Play" id="how-you-play">
      <div className="mx-auto max-w-6xl px-6 w-full flex flex-col items-center relative">
        <h2 className="text-white text-4xl font-bold font-['VoloSansPro'] uppercase mb-16 lg:mb-[80px] tracking-wide text-center">How You'll Play</h2>

        {/* Relative container for the columns to anchor absolute arrows */}
        <div className="relative w-full flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-stretch mt-4 lg:mt-0">

          {/* COMMITTED Annotation */}
          <div className="absolute -top-[55px] left-[5%] lg:left-[12%] flex items-center pointer-events-none z-10 hidden lg:flex">
            <span className="text-[#c7ff10] font-medium uppercase text-[18px] tracking-wide rotate-[-3deg] mr-[-8px]" style={{ fontFamily: '"Comic Sans MS", "Marker Felt", cursive' }}>Committed</span>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="mt-[20px]">
              <path d="M35 5 Q20 5, 8 30" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M4 22 L8 32 L15 25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* CASUAL Annotation */}
          <div className="absolute -top-[55px] left-[50%] -translate-x-[40%] lg:translate-x-[20%] xl:translate-x-[45%] flex items-center justify-center pointer-events-none z-10 hidden lg:flex">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="mt-[15px] -mr-1">
              <path d="M35 15 Q20 10, 8 35" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M4 25 L8 35 L16 28" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[#c7ff10] font-medium uppercase text-[18px] tracking-wide mx-2 rotate-[2deg]" style={{ fontFamily: '"Comic Sans MS", "Marker Felt", cursive' }}>Casual</span>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="mt-[15px] -ml-1">
              <path d="M5 15 Q20 10, 32 35" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M24 28 L32 35 L36 25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Column 1: LEAGUES */}
          <div className="flex-1 flex flex-col items-start border border-white/20 rounded-xl p-6 lg:p-8 relative bg-white/5 lg:bg-transparent">
            <h3 className="text-[#c7ff10] text-[18px] lg:text-[20px] font-bold font-['VoloSansPro'] uppercase mb-4 whitespace-nowrap">Leagues</h3>
            <p className="text-white text-[14px] leading-relaxed font-['VoloSansPro'] mb-8 flex-1">
              Weekly games and playoffs. Sign up solo, with friends, or a full team — we guarantee a game every week.
            </p>
            <button className="bg-[#c7ff10] hover:bg-[#b0eb00] text-[#0f172a] font-bold font-['VoloSansPro'] text-[14px] px-5 py-2 rounded-full flex items-center transition-colors shadow-sm">
              Sign up
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3.5 ml-1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

          {/* Column 2: DROP-INS */}
          <div className="flex-1 flex flex-col items-start border border-white/20 rounded-xl p-6 lg:p-8 relative bg-white/5 lg:bg-transparent">
            <h3 className="text-[#c7ff10] text-[18px] lg:text-[20px] font-bold font-['VoloSansPro'] uppercase mb-4 whitespace-nowrap">Drop-ins</h3>
            <p className="text-white text-[14px] leading-relaxed font-['VoloSansPro'] mb-8 flex-1">
              Jump in for a single game. Try a new sport or join friends without the season-long commitment.
            </p>
            <button className="bg-[#c7ff10] hover:bg-[#b0eb00] text-[#0f172a] font-bold font-['VoloSansPro'] text-[14px] px-5 py-2 rounded-full flex items-center transition-colors shadow-sm">
              Find a drop-in
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3.5 ml-1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

          {/* Column 3: PICKUPS */}
          <div className="flex-1 flex flex-col items-start border border-white/20 rounded-xl p-6 lg:p-8 relative bg-white/5 lg:bg-transparent">
            <h3 className="text-[#c7ff10] text-[18px] lg:text-[20px] font-bold font-['VoloSansPro'] uppercase mb-4 whitespace-nowrap">Pickups</h3>
            <p className="text-white text-[14px] leading-relaxed font-['VoloSansPro'] mb-8 flex-1">
              Just show up. We handle the teams and gear. Perfect for spontaneous play and packed schedules.
            </p>
            <button className="bg-[#c7ff10] hover:bg-[#b0eb00] text-[#0f172a] font-bold font-['VoloSansPro'] text-[14px] px-5 py-2 rounded-full flex items-center transition-colors shadow-sm">
              Find a pickup
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3.5 ml-1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function RentalsV() {
  const [includeFees, setIncludeFees] = useState(false);
  const [tab, setTab] = useState('solo');
  const [phase, setPhase] = useState('early-bird');
  const [isMobileRegOpen, setIsMobileRegOpen] = useState(false);

  // Prevent background scrolling when modal is open and reset on desktop resize
  useEffect(() => {
    if (isMobileRegOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup if window is resized past lg breakpoint (1024px)
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileRegOpen) {
        setIsMobileRegOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileRegOpen]);

  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-center pt-[0px] lg:pt-[100px] pb-[100px] relative size-full min-h-screen" data-name="League - V1">
      <Nav />
      <div className="w-full max-w-[1168px] lg:mt-0 mt-[60px] px-0 lg:px-6">
        <Header />
        <Main isOn={includeFees} setIsOn={setIncludeFees} activeTab={tab} setTab={setTab} phase={phase} setSetPhase={setPhase} />
      </div>
      <Footer />
      <MobileFixedNextButton onClick={() => setIsMobileRegOpen(true)} />

      {/* Mobile Registration Full Page Modal */}
      {isMobileRegOpen && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col lg:hidden animate-in slide-in-from-bottom-full duration-300">
          <div className="bg-white px-4 py-4 flex items-center justify-between border-b border-[#e2e8f0] sticky top-0 z-10 shadow-sm">
            <button
              onClick={() => setIsMobileRegOpen(false)}
              className="p-2 -ml-2 rounded-full hover:bg-black/5 text-black"
            >
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <h2 className="font-['VoloSansPro'] font-bold text-[18px] text-black">Complete Booking</h2>
            <div className="w-10"></div> {/* Spacer for centering */}
          </div>
          <div className="flex-1 overflow-y-auto pb-[180px] bg-white pt-0 px-0 shadow-none">
            <RentalsPricingCard isMobileModal={true} />
          </div>

          {/* Mobile Fixed CTA Footer for Book Court */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e2e8f0] p-4 z-50 shadow-[0_-8px_20px_rgba(0,0,0,0.06)] flex flex-col items-center gap-3">
            <button className="w-full bg-[#013af5] hover:bg-[#002bb5] text-white py-3.5 rounded-[12px] font-bold font-['VoloSansPro:Bold',sans-serif] text-[16px] flex items-center justify-center gap-2 transition-colors shadow-sm">
              Book Court <ArrowRight size={18} strokeWidth={2.5} />
            </button>
            <p className="text-center text-[11px] font-['VoloSansPro:Regular',sans-serif] text-[#94a3b8] px-4">
              You will receive booking info in the Volo App and via email.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}