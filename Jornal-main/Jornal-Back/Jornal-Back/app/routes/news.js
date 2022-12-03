const express = require("express");
var router = express.Router();

const News = require("./../models/news");

router.get("/", async(req,res) => {
    try{
        let news = await News.find({});
        res.status(200).render("pages/index", {news: news, type: ""});
    } catch(err){
        return res.status(500).json({err});
    }
});

router.get("/noticia/:id", async(req,res) => {
    try{
        let news = await News.find({_id: req.params.id, text_type: "noticia"});
        res.status(200).render("pages/news", {news: news[0], type: "Notícia"});
    }catch(err){
        return res.status(500).json({err});
    }
});

router.get("/cronica/:id", async(req,res) => {
    try{
        let news = await News.find({_id: req.params.id, text_type: "cronica"});
        res.status(200).render("pages/news", {news: news[0], type: "Crônica"});
    }catch(err){
        return res.status(500).json({err});
    }
});

router.get("/opiniao/:id", async(req,res) => {
    try{
        let news = await News.find({_id: req.params.id, text_type: "opiniao"});
        res.status(200).render("pages/news", {news: news[0], type: "Opinião"});
    }catch(err){
        return res.status(500).json({err});
    }
});

router.get("/noticia", async(req,res) => {
    try{
        let news = await News.find({text_type: "noticia"});
        res.status(200).render("pages/textType", {news: news, type: "Notícia"});
    } catch(err){
        return res.status(500).json({err});
    }
});

router.get("/opiniao", async(req,res) => {
    try{
        let news = await News.find({text_type: "opiniao"});
        res.status(200).render("pages/textType", {news: news, type: "Opinião"});
    } catch(err){
        return res.status(500).json({err});
    }
});

router.get("/cronica", async(req,res) => {
    try{
        let news = await News.find({text_type: "cronica"});
        res.status(200).render("pages/textType", {news: news, type: "Crônica"});
    } catch(err){
        return res.status(500).json({err});
    }
});

module.exports = router;