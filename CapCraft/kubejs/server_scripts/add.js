ServerEvents.recipes(event => {

event.shaped(
  Item.of('backpacked:backpack', 1), // arg 1: output
  [
    'AAA',
    'BCB', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'minecraft:leather',
    B: 'minecraft:string',  //arg 3: the mapping object
    C: 'minecraft:iron_ingot'
  }
)

event.shaped(
  Item.of('ironchest:diamond_chest', 1), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'minecraft:diamond',
    B: 'ironchest:gold_chest',  //arg 3: the mapping object
  }
)

event.shaped(
  Item.of('ironchest:gold_to_diamond_chest_upgrade', 1), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'minecraft:diamond',
    B: 'minecraft:gold_ingot',  //arg 3: the mapping object
  }
)

})