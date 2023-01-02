//1st pattern empty object example
// const return_empObj = ['nana', 'gina', 'jhon', 'andre'];
// console.log(return_empObj);
// 
// const person = ['Hanna', 'Anna', 'Nana', 'Ada'];//throw err example patter 1

//2nd pattern correct example
const tekken_char_data = [
    
    [
        'Yoshimitsu',
        'Hworang',
        'Lee',
        'Paul',
        'jin'
    ],
    
    'Tekken Character data list and movement',
    
    {
        name : 'Yoshimitsu',
        combat_style : 'Kenjutsu',
        special_move : 'itoryu'
    },
    {
        name : 'Hworang',
        combat_style : 'Taekwondo',
        special_move : 'Flying High Kick'
    },
    {
        name : 'Lee',
        combat_style : 'Jeet kundo',
        special_move : 'One Inch Punch'
    },
    {
        name : 'Paul',
        combat_style : 'Street Fighting',
        special_move : 'Devastating Kunckle',
    },
    {
        name : 'Jin',
        combat_style : 'Karate',
        special_move : 'Spinning Electric Kick'
    }
]

const person_full_data = [
    {
        name : 'Jhon',
        age : '25',
        ocup : 'task force'
    },
    {
        name : 'Nina',
        age : '25',
        ocup : 'front-desk'
    }
]

module.exports = {
    tekken_char_data, person_full_data
} // we can use different properties in here.
