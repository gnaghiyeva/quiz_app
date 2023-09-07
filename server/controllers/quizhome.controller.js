const QuizHome = require ('../models/quizhome.model')

const QuizHomeController = {
    post: async(req,res)=>{
        const newModel = new QuizHome({
            image: req.body.image,
            title: req.body.title,
            description:req.body.description,
        })
        await newModel.save()
        res.status(201).send("category created succesfully")
    },

    getAll: async (req, res) => {
        try {
          const AllModels = await QuizHome.find();
          res.status(200).send({
            data: AllModels,
            message: 'models get successfully',
          });
        } catch (err) {
          console.error(err);
          res.status(500).send('Internal server error');
        }
      },

    getById: async(req,res)=>{
        const id = req.params.id;
        QuizHome.findById(id).then((model)=>{
            res.status(200).send({
                data:model,
                message:'model get succesfully'
            })
        }).catch((err)=>{
            res.send('model not found')
        })
    },

    delete: async (req, res) => {
        const id = req.params.id;
        const deletedModel = await QuizHome.findByIdAndDelete(id)
        if (deletedModel == undefined) {
            res.status(204).send("model not found")
        }
        else {
            res.status(200).send({
                data: deletedModel,
                message: 'model deleted succesfully'
            })
        }
    },
    edit: async(req,res)=>{
        const id = req.params.id;
        const {image} = req.body
        const {title} = req.body
        const {description} = req.body
        const existedModel = await QuizHome.findByIdAndUpdate(id,{image:image, title:title, description:description})
        if(existedModel==undefined){
          res.status(204).send('category not found')
        }
        else{
          res.status(200).send('category edited succesfuly')
        }
    }

}
module.exports = QuizHomeController