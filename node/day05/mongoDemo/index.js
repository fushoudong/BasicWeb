const mongoose = require('mongoose');
// 连接mongodb数据库
mongoose.connect('mongodb://localhost/test');

/**
 * 创建一个模型
 * mongodb是动态的，非常灵活，只需要在代码中设计即可
 * 
 */
const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));