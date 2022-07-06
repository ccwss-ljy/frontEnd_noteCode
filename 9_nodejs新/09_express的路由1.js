import express from 'express';

// 创建路由实例
const router = express.Router()

// 创建路由
router.get('/user/list', (req, res) => {
    res.send('heihei');
});

router.get('/user/about', (req, res) => {
    res.send('haha')
})

export default router;