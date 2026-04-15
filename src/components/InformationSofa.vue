<template>
    <h1 class="title-sofa">
        <p> {{ data.InformationSofa[0].title }}</p>
    </h1>
  <div class="table-wrapper-s">
    <table class="compare-table-s">

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
      <img 
        v-if="row.type === 'image'" 
        :src="row.new" 
        class="car-img-s" 
      />
      <span v-else>{{ row.new }}</span>
    </td>

    <!-- ותיק -->
    <td>
      <img 
        v-if="row.type === 'image'" 
        :src="row.old" 
        class="car-img-s" 
      />
      <span v-else>{{ row.old }}</span>
    </td>

    <!-- כותרת -->
    <td class="label-cell-s">
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

 .table-wrapper-s {
  direction: rtl;
  width: 50vw;
  height: 50vh;
}

.compare-table-s {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

.compare-table-s th {
  background: #5d7fae;
  color: white;
  padding: 1.5rem;
  border: 0.15rem solid #333;
  font-size: clamp(1rem, 2.5vw, 2rem);
}

.compare-table-s td {
  border: 0.15rem solid #333;
  padding: 1.2rem; 
  background: #D9D9D9;
  font-size: clamp(0.9rem, 2.2vw, 1.8rem);
}


.label-cell-s {
  font-weight: bold;
  background: #d6cda5;
}

.car-img-s {
  max-width: 80%;
  width: 10rem;
  height: 5rem;
  object-fit: contain;
} 

</style>