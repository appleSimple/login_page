const join_box = document.querySelector('form');
const user_id = join_box.querySelector('#user-id');
const password = join_box.querySelector('#password');
const check_pass = join_box.querySelector('#check-pass');
const email = join_box.querySelector('#email');

// 회원정보 배열에 불러오기
let members =[];

if(localStorage.getItem('members') != null){
    load_info();
}

// 비밀번호 체크
const same = join_box.querySelector('.same');
const differ = join_box.querySelector('.differ');

function is_same(){
    if(password.value == '' && check_pass.value == ''){
        differ.classList.add('dis-none');
        same.classList.add('dis-none');
    }else if(password.value === check_pass.value){
        differ.classList.add('dis-none');
        same.classList.remove('dis-none');
    }else if(password.value != check_pass.value){
        same.classList.add('dis-none');
        differ.classList.remove('dis-none');
    }
}
setInterval(function(){
    is_same();
},500)

// join 버튼으로 회원가입
const join_btn = join_box.querySelector('#join');
const texts = join_box.querySelector('.texts');

function make_new_member(){ // 회원 배열&localStorage 추가
    const member = {
        User_id : user_id.value,
        Password : password.value,
        Email : email.value
    }
    members.push(member);

    const member_info = JSON.stringify(members);
    
    localStorage.setItem('members', member_info);
}

function load_info(){ // 페이지 로드와 함께 동작(저장정보 불러오기)
    const load_members = JSON.parse(localStorage.getItem('members'));
    for(let i=0; i<load_members.length; i++){
        members.push(load_members[i]);
    }
}

join_box.addEventListener('submit', function(e){ // join 버튼 클릭
    if(same.classList.contains('dis-none') || okay.classList.contains('dis-none')){
        e.preventDefault();
        alert('입력된 정보가 올바른지 확인해주세요!')
    }else{
        e.preventDefault();
        make_new_member();
        texts.value == ''; 
    }
})

// 아이디 중복 확인
const check_btn = join_box.querySelector('button');
const okay = join_box.querySelector('.okay');
const nope = join_box.querySelector('.nope');

check_btn.onclick = function(){
    
    if(localStorage.getItem('members') != null){
        for(let i=0; i<localStorage.getItem('members').length; i++){
            if(user_id.value === members[i]['User_id']){
                okay.classList.add('dis-none');
                nope.classList.remove('dis-none');
                break;
            }else{
                nope.classList.add('dis-none');
                okay.classList.remove('dis-none');
            }
        }
    }else{
        nope.classList.add('dis-none');
        okay.classList.remove('dis-none');
    }
}