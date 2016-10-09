(function(){
    function Tournament(){
        this.players = [
            {
                name:'Vatsal Pande',
                rank:  1,
                gender: 'Male'
            },
            {
                name: 'Pallavi',
                rank:3,
                gender: 'Female'
            },
            {
                name: 'Rahul Kaushik',
                rank: 4,
                gender: 'Male'
            },
            {
                name: 'Niketa Sharma',
                rank: 8,
                gender: 'Female'
            },
            {
                name: 'Parveen Lohchab',
                rank: 2,
                gender: 'Male'
            },
            {
                name: 'Sonika',
                rank: 11,
                gender: 'Female'
            },
            {
                name: 'Ravinder Hooda',
                rank: 6,
                gender: 'Male'
            },
            {
                name: 'Stuti',
                rank:19,
                gender: 'Female'
            },


        ];
    }

    angular.module('app')
        .controller('Tournament', Tournament );
}());