<template>
    <h1 class="title-r">
        <p> {{ data.InformationSofa[0].title }}</p>
    </h1>
  <div class="table-wrapper-r">
    <table class="compare-table">

      <thead>
        <tr>
          <th>רנגלר – חדש</th>
          <th>רנגלר – ותיק</th>
          <th>דגם</th>
        </tr>
      </thead>

      <tbody>
  <tr v-for="(row, index) in RenglerComparison" :key="index">

    <!-- חדש -->
    <td>
      <img 
        v-if="row.type === 'image'" 
        :src="row.new" 
        class="car-img" 
      />
      <span v-else>{{ row.new }}</span>
    </td>

    <!-- ותיק -->
    <td>
      <img 
        v-if="row.type === 'image'" 
        :src="row.old" 
        class="car-img" 
      />
      <span v-else>{{ row.old }}</span>
    </td>

    <!-- כותרת -->
    <td class="label-cell-r">
      {{ row.label }}
    </td>

  </tr>
</tbody>

    </table>
  </div>

  
</template>

<script>
export default {
  name: "informationRengler",

  inject: ["dataStore"],

  computed: {
    data() {
      return this.dataStore.data.value;
    },

    // משיכת ה-RenglerComparison בדיוק כמו בדוגמה שלך
    RenglerComparison() {
      return this.data?.RenglerComparison;
    }
  }
};
</script>

<style>
.title-r {
  font-family: "Karantina-Bold";
  font-size: 5rem;
  top: 1rem;
  margin: 2rem 0 0 0;  /* רק למעלה */
}

.table-wrapper-r {
  direction: rtl;
  width: 50rem;
  height: 40rem;
  margin-top: 1rem; /* הרווח הקטן בין הכותרת לטבלה */
}

.compare-table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

.compare-table th {
  background: #5d7fae;
  color: white;
  padding: 12px;
  border: 2px solid #333;
  font-size: 2rem;
}

.compare-table td {
  border: 2px solid #333;
  padding: 1.5rem;
  background: #D9D9D9;
  font-size: 1.8rem;
}

.label-cell-r {
  font-weight: bold;
  background: #d6cda5;
}

.car-img {
  max-width: 100%;
  height: 10rem;
  object-fit: contain;
}

</style>