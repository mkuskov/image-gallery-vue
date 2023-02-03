import _ from "lodash";

const galleryGetters = {
  filterByDate: function (state) {
    return `${state.startDate} ${
      state.endDate !== "" ? " — " : state.endDate
    } ${state.endDate}`;
  },
  items: (state) => {
    return state.galleryData;
  },
  removeSameValues: function (state) {
    const newArr = JSON.parse(JSON.stringify(state.dataForFilters)).map(
      (item: any) => {
        return {
          id: item.id,
          author: item.author,
          place: item.place,
        };
      }
    );

    const noSameValues = _.uniqBy(newArr, function (item: any) {
      return item.author;
    });

    return noSameValues;
  },
};

export default galleryGetters;
