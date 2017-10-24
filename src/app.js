import './components/css/common.css'
import layerDom from './components/layer/layer.js'

const App = function() {
    var layer = new layerDom()
    document.getElementById("htmlloaderDom").innerHTML = layer.tpl
}

new App()