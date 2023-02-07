//import vue for use our components globaly
import vue from 'vue';
//import English language pack from element-ui and some locale
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
//import element-ui styles and components (what we use in our project)
import 'element-ui/lib/theme-chalk/lib/index.css';
import {
  Button,
  Card,
  Form,
  FormItem,
  Input,
  Select,
  Option,
} from 'element-ui';

//added all components in array elements
const elements = [
  Button,
  Card,
  Form,
  FormItem,
  Input,
  Select,
  Option,
];

//specify the element-ui framework language (english)
locale.use(lang);

//added all elements in vue globaly
elements.forEach(el => Vue.use(el, { locale }));