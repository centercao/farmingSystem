/**
 * Created by center ON 17-11-27
 */
const router = require('koa-router')()

router.prefix('/devices');

/*******************attributes******************************
 * id
 * name
 * img support http(s) static path
 * reg   0/1 account registered -> accDevices:x...x (set)
 * type
 * joined   join gateway -> gateDevices:x...x (set)
********************attributes******************************/

router.head('/', function (ctx, next) {
	let query = ctx.request.query;
	let headers =ctx.header;
	var status = ctx.response.status;
	let mydata = ctx.app.context;
	ctx.body = {head:`this is a devices/${id}  head response!`};// not return
});

// Patch an existing model instance or insert a new one into the data source.
// 修补现有的模型实例或插入新的实例到数据源中。
router.patch('/', function (ctx, next) {
	ctx.body = 'this is a devices patch response!';
});
// Find all instances of the model matched by filter from the data source.
// 从数据源中找到与筛选器匹配的所有实例。
router.get('/', function (ctx, next) {
	let query = ctx.request.query;
	let headers =ctx.header;
	let accepts = ctx.accepts();
	for(var key in query){//遍历json对象的每个key/value对,p为key
		console.log(`key:${key},value:${query[key]}`);
	}
	ctx.body = {abc:123}; // 'this is a devices get response!';
});
// Replace an existing model instance or insert a new one into the data source
// 替换现有的模型实例或将新实例插入到数据源中
router.put('/', function (ctx, next) {
	ctx.body = 'this is a devices put response';
});
// Create a new instance of the model and persist it into the data source.
// 创建模型的一个新实例并将其持久化到数据源中。
router.post('/', function (ctx, next) {
	let body = ctx.request.body;
	let headers =ctx.header;
	let contentType = ctx.request.type;
	console.log("headers:", headers);
	for(var key in body){//遍历json对象的每个key/value对,p为key
		console.log(`key:${key},value:${body[key]}`);
	}
	ctx.body = 'this is a devices post response';
});
// Patch attributes for a model instance and persist it into the data source.
// 模型实例的补丁属性并将其持久化到数据源中。
router.patch('/:id', function (ctx, next) {
	let id = ctx.params.id;
	ctx.body = `this is a devices/${id}  patch response!`;
});
// Check whether a model instance exists in the data source.
// 检查模型实例是否存在于数据源中
router.head('/:id', function (ctx, next) {
	let id = ctx.params.id;
	var status = ctx.response.status;
	ctx.set("Access-Control-Expose-Headers", "abcd"); // 允许自定义响应头信息
	ctx.set({abcd:1234});
	ctx.body = {head:`this is a devices/${id}  head response!`};
});
// Find a model instance by {{id}} from the data source.
// 从数据源中找到一个模型实例。
router.get('/:id', function (ctx, next) {
	let id = ctx.params.id;
	ctx.body = `this is a devices/${id} get response!`;
});
// Replace attributes for a model instance and persist it into the data source
// 替换模型实例的属性并将其持久化到数据源中
router.put('/:id', function (ctx, next) {
	let id = ctx.params.id;
	ctx.body = `this is a devices/${id} put response`;
});
// Delete a model instance by {{id}} from the data source.
// 从数据源删除一个模型实例。
router.delete('/:id', function (ctx, next) {
	let id = ctx.params.id;
	ctx.body = `this is a devices/${id} delete response`;
});
// Check whether a model instance exists in the data source.
// 检查模型实例是否存在于数据源中。
router.get('/:id/exists', function (ctx, next) {
	let id = ctx.params.id;
	ctx.body = `this is a devices/${id}/exists get response!`;
});
// Replace attributes for a model instance and persist it into the data source.
// 替换模型实例的属性并将其持久化到数据源中。
router.post('/:id/replace', function (ctx, next) {
	let id = ctx.params.id;
	ctx.body = `this is a devices/${id}/replace  post response!`;
});
// Create a change stream.
// 创建变更流。
router.get('/change-stream', function (ctx, next) {
	ctx.body = `this is a devices/change-stream get response!`;
});
// Create a change stream.
// 创建变更流。
router.post('/change-stream', function (ctx, next) {
	ctx.body = `this is a devices/change-stream post response!`;
});
// Count instances of the model matched by where from the data source.
// 计数来自数据源的模型匹配的实例。
router.get('/count', function (ctx, next) {
	ctx.body = `this is a devices/count get response!`;
});
// Find first instance of the model matched by filter from the data source.
// 从数据源中找到匹配的模型的第一个实例
router.get('/findOne', function (ctx, next) {
	ctx.body = `this is a devices/findOne get response!`;
});
// Replace an existing model instance or insert a new one into the data source.
// 替换现有的模型实例或将新实例插入到数据源中。
router.post('/replaceOrCreate', function (ctx, next) {
	ctx.body = `this is a devices/replaceOrCreate post response!`;
});
// Update instances of the model matched by {{where}} from the data source.
router.post('/update', function (ctx, next) {
	ctx.body = `this is a devices/update post response!`;
});
// Update an existing model instance or insert a new one into the data source based on the where criteria
// 根据现有的标准更新现有的模型实例或插入新的模型实例到数据源中
router.post('/upsertWithWhere', function (ctx, next) {
	ctx.body = `this is a devices/update post response!`;
});
module.exports = router;