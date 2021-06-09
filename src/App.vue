<template>
  <div class="clientBlock">
    <h1>Новый клиент</h1>
    <div class="mainInfo">
      <div class="part" style="display: flex">
        <div class="inputBlock">
          <label for="surname">Фамилия: </label><br>
          <input placeholder="Бирюков" type="text" name="surname" id="surname">
        </div>
        <div class="inputBlock">
          <label for="name">Имя: </label><br>
          <input placeholder="Влад" name="name" type="text" id="name">
        </div>
        <div class="inputBlock">
          <label for="middleName">Отчество: </label><br>
          <input placeholder="Олегович" name="middleName" type="text" id="middleName">
        </div>
      </div>
      <div class="part" style="display: flex">
        <div class="inputBlock">
          <label for="date">Дата рождения: </label><br>
          <input type="date" id="date" name="date"/>
        </div>
        <div class="inputBlock">
          <label for="phoneNumber">Номер телефона: </label><br>
          <input placeholder="791646623230" type="number" name="number" id="phoneNumber">
        </div>
        <div class="inputBlock">
          <label>Пол: </label><br>
          <input placeholder="Олегович" name="gender" type="radio" id="mGender" /> <span>Мужчина</span>
          <input placeholder="Олегович" name="gender" type="radio" id="wGender" /> <span>Женщина</span>
        </div>
      </div>
      <div class="part" style="display: flex">
        <div class="inputBlock">
          <label for="clientsGroup">Группа клиентов: </label><br>
          <div class="selectCover">
           <div id="clientsGroup" class="select"></div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>



export default {
  name: "App",


};
</script>

