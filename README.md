

post '/api/auth/register' ------- username,email, password yazaraq girish qeydiyyatdan kechirsiz
post '/api/auth/login' ---------- email,password yazaraq girish edirsiz
get '/api/user/:id' ------------- id'sine gore useri verir


get '/api/venues' --------------- butun mekanlari verir
get '/api/venues/:id' ----------- id'sine gore mekani verir
put '/api/venues/:id' ----------- id'sine gore mekanda deyishiklik etmek (yalniz admin)
delete '/api/venues/:id' -------- id'sine gore mekani silmek (yalniz admin)
post '/api/venues' -------------- name,location,capacity,description gondererek yeni mekan yaradiriq (yalniz admin)


get '/api/reservations'  -------- butun rezervasiyalara girish (yalniz admin)
get '/api/reservations/:id' ----- id'sine gore rezervasiyaya girish
delete '/api/reservations/:id --- id'sine gore rezervaziyani legv etmek
post '/api/reservations' -------- date,time,numberOfPeople'ni gondererek yeni rezervasiya yaradiriq
