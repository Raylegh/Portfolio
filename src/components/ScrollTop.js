// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollTop = () => {
//   const { pathname } = useLocation();
//   useEffect(() => {

//       window.scroll({
//         top: 0,
//         left: 0,
//       });

//   }, [pathname]);
//   return null;
// };

// export default ScrollTop;

import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function ScrollTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return null;
}

export default withRouter(ScrollTop);
