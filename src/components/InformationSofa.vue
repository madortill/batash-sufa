<template>
    <h1 class="title-sofa">
        <p> {{ data.InformationSofa[0].title }}</p>
    </h1>
  <div class="table-wrapper">
    <table class="compare-table">

      <thead>
        <tr>
          <th>סופה 2</th>
          <th>סופה 3</th>
          <th>דגם</th>
        </tr>
      </thead>

      <tbody>
  <tr v-for="(row, index) in carComparison" :key="index">

    <!-- חדש -->
    <td>
      <!-- <img 
        v-if="row.type === 'image'" 
        :src="row.new" 
        class="car-img" 
      /> -->
      <span>{{ row.new }}</span>
    </td>

    <!-- ותיק -->
    <td>
      <!-- <img 
        v-if="row.type === 'image'" 
        :src="row.old" 
        class="car-img" 
      /> -->
      <span>{{ row.old }}</span>
    </td>

    <!-- כותרת -->
    <td class="label-cell">
      {{ row.label }}
    </td>

  </tr>
</tbody>

    </table>
  </div>

  
</template>

<script>
export default {
  name: "CarComparison",

  inject: ["dataStore"],

  computed: {
    data() {
      return this.dataStore.data.value;
    },

    // משיכת ה-carComparison בדיוק כמו בדוגמה שלך
    carComparison() {
      return this.data?.carComparison || [];
    }
  }
};
</script>

<style>
.title-sofa {
    font-family: "Karantina-Bold";
    font-size: 5rem;
    top: 1rem;
    margin: 0rem;
}

.table-wrapper {
  direction: rtl;
  width: 50rem;
  height: 50rem;
}

.compare-table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

.compare-table th {
  background: #5d7fae;
  color: white;
  padding: 2rem;
  border: 0.5 solid #333;
  font-size: 2rem;
}

.compare-table td {
  border: 2px solid #333;
  padding: 1.5rem;
  background: #D9D9D9;
  font-size: 1.8rem;
}

.label-cell {
  font-weight: bold;
  background: #d6cda5;
}

.car-img {
  max-width: 100%;
  height: 10rem;
  object-fit: contain;
}

</style>