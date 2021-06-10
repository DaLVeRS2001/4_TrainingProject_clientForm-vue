<template>
  <form @submit.prevent="submit">
  <div class="mainInfo">
    <h1>Новый клиент</h1>
    <div class="part one">
      <field-title
        titleName="Фамилия: " label="surname"
      >
        <input
          v-model.trim="surname"
          class="field" placeholder="Бирюков"
          type="text" name="surname" id="surname"
          @focus="v$.surname.$touch()"
        />


        <div v-if="v$.surname.$error" class="errorMessage">
          <small v-if="v$.surname.required.$invalid">
            Обезательное поле
          </small>
          <small v-else-if="v$.surname.cyrWordValidator.$invalid">
            Только кириллические буквы
          </small>
        </div>
      </field-title>
      <field-title titleName="Имя: " label="name">
        <input
          v-model="client.mainInfo.name" @focus="v$.client.mainInfo.name.$touch"
          class="field" placeholder="Влад"
          name="name" type="text" id="name"
        />
        <div v-if="v$.client.mainInfo.name.$error" class="errorMessage">
          <small v-if="v$.client.mainInfo.name.required.$invalid">
            Обезательное поле
          </small>
          <small v-else-if="v$.client.mainInfo.name.cyrWordValidator.$invalid">
            Только кириллические буквы
          </small>
        </div>
      </field-title>
      <field-title titleName="Отчество: " label="middleName">
        <input
          v-model="client.mainInfo.middleName" @focus="v$.client.mainInfo.middleName.$touch"
          class="field" placeholder="Олегович"
          name="middleName" type="text" id="middleName"
        />
        <div v-if="v$.client.mainInfo.middleName.$error" class="errorMessage">
          <small v-if="v$.client.mainInfo.middleName.cyrWordValidator.$invalid">
            Только кириллические буквы
          </small>
        </div>
      </field-title>
    </div>

    <div class="part two">
      <field-title titleName="Дата рождения: " label="birthDate">
        <input
          v-model="client.mainInfo.birthDate" @focus="v$.client.mainInfo.birthDate.$touch"
          class="field" id="birthDate"
          type="date" name="birthDate"
        />
        <div v-if="v$.client.mainInfo.birthDate.$error" class="errorMessage">
          <small v-if="v$.client.mainInfo.birthDate.required.$invalid">
            Обезательное поле
          </small>
        </div>
      </field-title>
      <field-title titleName="Номер телефона: " label="phoneNumber">
        <input
          v-model="client.mainInfo.phoneNumber" @focus="v$.client.mainInfo.phoneNumber.$touch"
          class="field" placeholder="791646623230" type="number"
          name="phoneNumber" id="phoneNumber"
        />
        <div v-if="v$.client.mainInfo.phoneNumber.$error" class="errorMessage">
          <small v-if="v$.client.mainInfo.phoneNumber.required.$invalid">
            Обезательное поле
          </small>
          <small v-else-if="v$.client.mainInfo.phoneNumber.phoneValidator.$invalid">
            Неправильный формат номера
          </small>
        </div>
      </field-title>
      <div style="margin-top: 17px">
        <div>Пол:</div>
        <div style="display: flex">
          <field-title style="display:flex;" titleName="Мужчина" label="mGender">
            <input
              class="field_radio" name="gender"
              type="radio" id="mGender"
              @click="setGender('мужчина')"
            />
          </field-title>
          <field-title style="display:flex; margin-left: 10px" titleName="Женщина" label="wGender">
            <input
              class="field_radio"  name="gender"
              type="radio" id="wGender"
              @click="setGender('женщина')"
            />
          </field-title>
        </div>
      </div>
    </div>

    <div class="part three">
      <field-title titleName="Группа клиентов: " label="group">
        <CustomSelect
          :itemsData="groups" :selectType="'group'"
          :errorNotice="v$.client.mainInfo.group.$touch" :multipleMode="true"
          placeholder="Выберите группу" id="group"  name="group"
          @click-select="changeValue"
        />
        <div v-if="v$.client.mainInfo.group.$error" class="errorMessage">
          <small v-if="v$.client.mainInfo.group.required.$invalid">
            Обезательное поле
          </small>
        </div>
      </field-title>
      <field-title titleName="Лечащий врач: " label="doctor">
        <CustomSelect
          :itemsData="doctors"
          :selectType="'doctor'" id="doctor" name="doctor"
          placeholder="Выберите врача"  @click-select="changeValue"
        />
      </field-title>
      <div>
        <div style="margin-top: 17px">
          <span>Уведомление: </span><br>
          <field-title style="display: flex" titleName="Не отправлять СМС" label="notice">
            <input name="notice"
              type="checkbox" id="notice"
              @click="setNotice(!this.client.mainInfo.notice)"
            />
          </field-title>
        </div>
      </div>
    </div>
  </div>




  <div class="addressInfo">
    <h2>Адрес</h2>
    <div class="part one">
      <field-title titleName="Индекс: " label="index">
        <input
          v-model="client.addressInfo.index"
          class="field" placeholder="152040"
          name="index" type="number" id="index"
          @focus="v$.client.addressInfo.index.$touch"
        />
      </field-title>
      <field-title titleName="Страна: " label="country">
        <input
          v-model="client.addressInfo.country"
          class="field" placeholder="Россия" name="country"
          type="text" id="country" @focus="v$.client.addressInfo.country.$touch"
        />
        <div v-if="v$.client.addressInfo.country.$error" class="errorMessage">
          <small v-if="v$.client.addressInfo.country.cyrWordValidator.$invalid">
            Только кириллические буквы
          </small>
        </div>
      </field-title>
      <field-title titleName="Область: " label="region">
        <input
          v-model="client.addressInfo.region"
          class="field" placeholder="Московская область"
          name="region" type="text" id="region"
          @focus="v$.client.addressInfo.region.$touch"
        />
        <div v-if="v$.client.addressInfo.region.$error" class="errorMessage">
          <small v-if="v$.client.addressInfo.region.cyrWordValidator.$invalid">
            Только кириллические буквы
          </small>
        </div>
      </field-title>
    </div>

    <div class="part two" >
      <field-title titleName="Город: " label="city">
        <input
          v-model="client.addressInfo.city"
          class="field" placeholder="Орехово-Зуево" name="city"
          type="text" id="city" @focus="v$.client.addressInfo.city.$touch"
        />
        <div v-if="v$.client.addressInfo.city.$error" class="errorMessage">
          <small v-if="v$.client.mainInfo.name.required.$invalid">
            Обезательное поле
          </small>
          <small v-else-if="v$.client.addressInfo.city.cyrWordValidator.$invalid">
            Только кириллические буквы
          </small>
        </div>
      </field-title>
      <field-title titleName="Улица: " label="street">
        <input
          v-model="client.addressInfo.street"
          class="field" placeholder="Пушкина" name="street"
          type="text" id="street" @focus="v$.client.addressInfo.street.$touch"
        />
        <div v-if="v$.client.mainInfo.name.$error" class="errorMessage">
          <small v-if="v$.client.addressInfo.street.cyrWordValidator.$invalid">
            Только кириллические буквы
          </small>
        </div>
      </field-title>
      <field-title titleName="Дом: " label="houseNum">
        <input
          v-model="client.addressInfo.houseNum"
          class="field" placeholder="101" name="houseNum"
          type="number" id="houseNum" @focus="v$.client.addressInfo.houseNum.$touch"
        />
      </field-title>
    </div>
  </div>



  <div class="docInfo">
    <h2>Документы</h2>
    <div class="part one">
      <field-title   title-name="Тип документа: " label="docType">
        <CustomSelect
          :errorNotice="v$.client.docInfo.docType.$touch"
          :itemsData="documentTypes" :selectType="'docType'"
          placeholder="Выберите документ"  id="docType" name="docType"
          @click-select="changeValue"
        />
        <div v-if="v$.client.docInfo.docType.$error" class="errorMessage">
          <small v-if="v$.client.docInfo.docType.required.$invalid">
            Обезательное поле
          </small>
        </div>
      </field-title>
      <field-title titleName="Серия: " label="docSeries">
        <input
          v-model="client.docInfo.docSeries"
          class="field doc" placeholder="4212"
          name="docSeries" type="number" id="docSeries"
          @focus="v$.client.docInfo.docSeries.$touch"
        />
      </field-title>
      <field-title titleName="Номер: " label="docNum">
        <input
          v-model="client.docInfo.docNum"
          class="field doc" placeholder="123456" name="docNum"
          type="number" id="docNum" @focus="v$.client.docInfo.docNum.$touch"
        />
      </field-title>
      <field-title titleName="Дата выдачи: " label="docDate">
        <input
          v-model="client.docInfo.docDate"  type="date" id="docDate"
          class="field"  placeholder="11"
          name="docDate" @focus="v$.client.docInfo.docDate.$touch"
        />
        <div v-if="v$.client.docInfo.docDate.$error" class="errorMessage">
          <small v-if="v$.client.docInfo.docDate.required.$invalid">
            Обезательное поле
          </small>
        </div>
      </field-title>
    </div>

    <div class="part two">
      <field-title titleName="Кем выдан: " label="department">
        <input
          placeholder="Отделом внутренних дел 'Гольяново' гор.Москвы "
          name="department" type="text" id="department" class="field long"
          @focus="v$.client.docInfo.department.$touch" v-model="client.docInfo.department"
        />
        <div v-if="v$.client.docInfo.department.$error" class="errorMessage">
          <small v-if="v$.client.docInfo.department.cyrWordValidator.$invalid">
            Только кириллические буквы
          </small>
        </div>
      </field-title>
    </div>
  </div>
  <button>Отправить форму</button>
  </form>
</template>



<script>
import CustomSelect from "@/components/fields/CustomSelect";
import FieldTitle from "@/layouts/FieldTitle";
import useVuelidate from "@vuelidate/core";
import {required } from "@vuelidate/validators";
const phoneValidator = value =>
  value.length === 11 && /^7[0-9]+$/.test(value);

const cyrWordValidator = value => /^[А-ЯЁа-яё\- ]*$/.test(value);
export default {
  components: { CustomSelect, FieldTitle },
  props: {},
  data() {
    return{
      selectType: '',
      surname: "",
      client: this.createEmptyClient(),
      groups: [{ name: "VIP", clicked: false },
        { name: "Проблемные", clicked: false },
        { name: "ОМС", clicked: false }],
      doctors: [{ name: "Иванов", clicked: false },
        { name: "Захаров", clicked: false },
        { name: "Чернышева", clicked: false }],
      documentTypes: [{ name: "Паспорт", clicked: false },
        { name: "Свидетельство о рождении", clicked: false },
        { name: "Вод. удостоверение", clicked: false }],
      v$: useVuelidate(),
    }
  },


  validations() {
    return {
      surname: {required, cyrWordValidator},
      client: {
        mainInfo: {

          name: {required, cyrWordValidator},
          middleName:{cyrWordValidator},
          birthDate: {required},
          phoneNumber: {required, phoneValidator},
          gender: {},
          group: {required},
          doctor: {},
          notice: {}
        },
        addressInfo: {
          index: {},
          country: {cyrWordValidator},
          region: {cyrWordValidator},
          city: {required,  cyrWordValidator},
          street: {cyrWordValidator},
          houseNum: {}
        },
        docInfo: {
          docType: {required},
          docSeries: {},
          docNum: {},
          docDate: {required},
          department: {cyrWordValidator}
        }
      }
    };
  },
  methods: {
    changeValue(emitValue){
      const {selectValue, selectType} = emitValue
      if(selectType === 'group') this.client.mainInfo.group = selectValue
      if(selectType === 'doctor') this.client.mainInfo.doctor = selectValue
      if(selectType === 'docType') this.client.docInfo.docType = selectValue

    },
    setNotice(boolean){
      this.client.mainInfo.notice = boolean
    },
    setGender(gender){
      this.client.mainInfo.gender = gender
    },
    submit(){
      this.v$.$touch()
      if(this.v$.$invalid)return false;
      alert('Success')
      this.client = this.createEmptyClient();
      this.v$.$reset()

    },

    createEmptyClient() {
      return {
        mainInfo: {
          name: "",
          middleName: "",
          birthDate: "",
          phoneNumber: "",
          gender: "",
          group: "",
          doctor: "",
          notice: false
        },
        addressInfo: {
          index: "",
          country: "",
          region: "",
          city: "",
          street: "",
          houseNum: ""
        },
        docInfo: {
          docType: "",
          docSeries: "",
          docNum: "",
          docDate: "",
          department: ""
        }
      };
    }
  },







}
</script>


<style lang="sass">
@import "./src/assets/styles/main"
</style>
