/**
 * Created by: Ruben Encarnacion
 * Presidency of Dominican Republic
 * Date: 01/march/2021
 * https://presidencia.gob.do
 */

/**
 * Updated by: Max Sierra
 * Intellisys
 * Date: 24/march/2021
 * info@intellisys.com.do
 * https://intellisysdcorp.com
 */

new Vue({
  el: "#app",
  data: {
    provinceSelected: [],
    municitySelected: [],
    provinces: [...centros3],
  },
  methods: {
    provinceChange: function (e) {
      this.municitySelected = [];
    },
  },
});
