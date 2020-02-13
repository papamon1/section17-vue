const customPlugin ={
    install: function (Vue, options){
        // Entender que es un método que se podrá usar de forma global
        Vue.myGlobalMethod= function(){
            alert('I am the global method');
        }
        Vue.MyCustomProperty='A am a custom property'


        //2. Add a global asset
        Vue.directive('blue-color', {
            bind(el,binding){
                el.style.color='blue'
            }
        })

        //3. Inject some component options, mixins
        Vue.mixin({
            data(){
                return{
                    custom_message: 'rrrorararasda'
                }
            },
            created(){
                //Este mensaje aparecerá muchas veces en la consola, porque lo estaremos inyectando una vez por cada uno de los componentes
                console.log('Custom mixin created')
            },
            methods:{
                scream(){
                    alert(this.custom_message)
                }
            }
        })

        //4. Add an instance method or property
        Vue.prototype.$customMethod=function(){
            alert('I am a custom instance method')
        }

    }
}

export default customPlugin