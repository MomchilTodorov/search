import documents from '../data/perfumeCollection.js';
  
  // main function to search the documents created by lunr
var idx = lunr(function () {
    this.ref('id')
    this.field('brand')
    this.field('fragrance')

    documents.forEach(function (doc) {
      this.add(doc)
    }, this)
  })

// function to get back the requested documents

function searchPerfumes(text) {
    const result = idx.search(text)

    return result.map(item => {
      return documents.find(document => item.ref === document.id)
    })
  }

export {idx, searchPerfumes};