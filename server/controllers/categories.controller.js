const QuizCategory = require('../models/categories.model')

const QuizCategoryController = {

    getAll: async (req, res) => {
        try {
          const AllCategories = await QuizCategory.find();
          res.status(200).send({
            data: AllCategories,
            message: 'categories get successfully',
          });
        } catch (err) {
          console.error(err);
          res.status(500).send('Internal server error');
        }
      },
  
    getbyID: async (req, res) => {
        const id = req.params.id
        QuizCategory.findById(id).then((category) => {
            res.status(200).send({
                data: category,
                message: 'category get  success'
            })

        }).catch((err) => {
            res.send('category not found')
        })


    },
    post: async (req, res) => {
        const newCategory = new QuizCategory({
            categoryName: req.body.categoryName
        })
        await newCategory.save()
        res.status(201).send("category created succesfully")
    },

    delete: async (req, res) => {
        const id = req.params.id;
        const deletedCategory = await QuizCategory.findByIdAndDelete(id)
        if (deletedCategory == undefined) {
            res.status(204).send("category not found")
        }
        else {
            res.status(200).send({
                data: deletedCategory,
                message: 'category deleted succesfully'
            })
        }
    },
    edit: async(req,res)=>{
        const id = req.params.id;
        const {categoryName} = req.body
        const existedCategory = await QuizCategory.findByIdAndUpdate(id,{categoryName:categoryName})
        if(existedCategory==undefined){
          res.status(204).send('category not found')
        }
        else{
          res.status(200).send('category edited succesfuly')
        }
    }


}

module.exports = QuizCategoryController