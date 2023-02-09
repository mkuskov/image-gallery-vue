import _ from "lodash";

const filtersGetters = {
  // removeSameValues: function(state) {
  //   const newArr = JSON.parse(JSON.stringify(state.authorsList)).map(
  //     (item: any) => {
  //       return {
  //         id: item.id,
  //         author: item.author,
  //       };
  //     }
  //   );

  //   const noSameValues = _.uniqBy(newArr, function (item: any) {
  //     return item.author;
  //   });

  //   return noSameValues;
  // },
};

export default filtersGetters;
