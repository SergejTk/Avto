<template>
    <div class="avto" v-on:click="closeModalOut">

    <button id="myBtn" v-on:click="openModal">Добавить Авто</button>
            <div id="myModal" class="modal" style="display: none;">
            
                <div class="modal-content">
                    <span class="close" v-on:click="closeModal">&times;</span>
                    <h3>Новое Avto</h3>
                    <div id="car">
                        <form>
                            <div class="form-group">
                                <label for="model">Модель:</label>
                                <input type="text" v-model="model" class="form-control" id="model">
                            </div>
                            <br />
                            <div class="form-group">
                                <label for="number">Номер:</label>
                                <input type="text" v-model="number" class="form-control" id="number">
                            </div>
                            <br />
                            <div class="form-group">
                                <label for="color">Цвет:</label>
                                <input type="text" v-model="color" class="form-control" id="color">
                            </div>
                            <br />
                            <button type="button" class="btn btn-primary" v-on:click="pushlist">Отправить</button>
                        </form>
                    </div>
                </div>

            </div>
    </div>
</template>
<style>

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  font-family: Arial, Helvetica, sans-serif;
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid rgb(65, 189, 206);
  width: 80%;
  font-family: Arial, Helvetica, sans-serif;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
<script>

import Service from './Service.js'

export default{
    name: 'avto',
    data() {
        return{
            //avto: {},
            model: '',
            number: '',
            color: ''
            
        }
    },
    components: {
        Service
    },
    methods: {
    // pushlist: function(model, number, color){
        pushlist(){
            Service.addAvto(this.model, this.number, this.color);
        },
        openModal(){
            document.getElementById('myModal').style.display = "block";
        },
        closeModal(){
            document.getElementById('myModal').style.display = "none";
        },
        closeModalOut(event){
            if (event.target == document.getElementById('myModal')) {
                document.getElementById('myModal').style.display = "none";
            }
        }
    }
};

</script>



