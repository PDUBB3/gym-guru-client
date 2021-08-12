import React from "react";
import ReactDOM from "react-dom";

console.clear();

const slides = [
  {
    title: "Gym 1",
    subtitle: "Peru",
    description: "Adventure is never far away",
    image:
      "https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    title: "Gym 2",
    subtitle: "France",
    description: "Let your dreams come true",
    image:
      "https://images.unsplash.com/photo-1540558870477-e8c59bf88421?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGd5bXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Gym 3",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Gym 4",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/photo-1568225506950-666cd1e7b2c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzQxfHxneW18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Gym 5",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/photo-1577992805652-44fed5545066?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkyfHxneW18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

function Carousel() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="slides">
      <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
  );
}

export default Carousel;
