import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../Store/ItemSlice";
import { FetchingSliceActions } from "../Store/FetchingSlice";
const FetchingItem = () => {
  const fetchStatus = useSelector((store) => store.fetchingStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchingDone) return;

    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(FetchingSliceActions.markfetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(FetchingSliceActions.markfetchingDone());
        dispatch(FetchingSliceActions.markfetchingFinished());
        dispatch(itemsActions.addInitialItems(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  return <></>;
};

export default FetchingItem;
