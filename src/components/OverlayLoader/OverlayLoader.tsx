import { useSelector } from "react-redux";
import "./overlayloader.css";

export const OverlayLoader = () => {
  const loadingState = useSelector((state: any) => state.loading);

  return (
    <>
      {loadingState.requestCount > 0 && (
        <div className="overlay">
          <div className="overlay__inner">
            <div className="overlay__content">
              <img
                alt="spinner"
                className="spinner"
                src="/assets/images/tobeto.png"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};