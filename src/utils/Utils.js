// restituisce true se le query passatesono uguali, false altrimenti
export const isLastQueryEqualToCurrentOne = function (lastQuery, currentQuery) {
      const lastFrom = JSON.stringify(lastQuery.FROM),
          lastTo = JSON.stringify(lastQuery.TO),
          lastTimeRange = JSON.stringify(lastQuery.TIME_RANGE);

      const currentFrom = JSON.stringify(currentQuery.FROM),
          currentTo = JSON.stringify(currentQuery.TO),
          currentTimeRange = JSON.stringify(currentQuery.TIME_RANGE);

    return lastFrom === currentFrom && lastTo === currentTo && lastTimeRange === currentTimeRange;
};