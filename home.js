// 로그인박스 애니메이션
const email_box = document.querySelector('.email-box');
const email_label = email_box.querySelector('label');
const email_input = email_box.querySelector('input');
const p_box = document.querySelector('.p-box');
const p_label = p_box.querySelector('label');
const p_input = p_box.querySelector('input');
const labels = document.querySelectorAll('.input_box label')

labels.forEach((label) => {
    label.innerHTML = label.innerText
    .split('')
    .map(
        (letter, index) =>
            `<span style="transition-delay:${index*50}ms">${letter}</span>`
    )
    .join('');
})

// for반복문과 setTimeout을 함께 쓸 경우, 클로져 고려해 코딩해야함
// function email_ani(){
//     for(let i=0; i<email_spans.length; i++){
//         (function(i){
//             setTimeout(function(){
//                 email_label.childNodes[i].classList.add('jump_ani');
//             }, 100*i)
//         })(i);
//     }  
// }
// email_input.onclick = function(){  
//     const join_span = email_spans.map(x => '<span>'+x+'</span>').join('');
//     email_label.innerHTML = join_span;

//     email_ani();
// }

// function p_ani(){
//     for(let i=0; i<p_spans.length; i++){
//         (function(i){
//             setTimeout(function(){
//                 p_label.childNodes[i].classList.add('jump_ani');
//             }, 100*i)
//         })(i);
//     }  
// }

// p_input.onclick = function(){  
//     const join_span = p_spans.map(x => '<span>'+x+'</span>').join('');
//     p_label.innerHTML = join_span;

//     p_ani();
// }

// 패스워드 길이에 변하는 배경화면 블러효과

const bg_img = document.querySelector('.bg-img');

p_input.addEventListener('keydown', function(){
    const p_length = p_input.value.length;
    for(let i=0; i<10; i++){ 
        if(p_length == i){
            x = 10-i;
            bg_img.style.filter = 'blur('+x+'px)';
        }
    }
})

// 정보 입력 후 로그인 버튼 클릭시 이메일&비밀번호 일치/불일치

const login_btn = document.querySelector('.login-btn');
const log_info = JSON.parse(localStorage.getItem('members'));

login_btn.onclick = function(){
    try{
        for(let i=0; i<localStorage.getItem('members').length; i++){
            if(email_input.value === log_info[i]['Email'] && p_input.value === log_info[i]['Password']){
                alert('okay');
                break;
            }
        }
    }catch(err){
        alert('nope');
    }
}
