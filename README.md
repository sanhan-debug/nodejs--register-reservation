# Qeydiyyat və Rezervasiya Sistemi API

Bu API istifadəçilərin qeydiyyatdan keçməsi, giriş etməsi, məkanları idarə etməsi və rezervasiya yaratması üçün istifadə olunur.

## Autentifikasiya və İstifadəçi Əməliyyatları

### POST `/api/auth/register`
İstifadəçinin qeydiyyatdan keçməsi üçün.  
**Input**: `username`, `email`, `password`  
**Response**: Qeydiyyatdan keçən istifadəçi məlumatları.

### POST `/api/auth/login`
İstifadəçinin giriş etməsi üçün.  
**Input**: `email`, `password`  
**Response**: Giriş uğurlu olarsa, JWT token.

### GET `/api/user/:id`
Verilən `id`-yə əsasən istifadəçi məlumatlarını əldə etmək üçün.  
**Access**: Avtorizasiya tələb olunur.

## Məkan Əməliyyatları

### GET `/api/venues`
Bütün məkanların siyahısını əldə etmək üçün.  
**Access**: İctimai.

### GET `/api/venues/:id`
Verilən `id`-yə əsasən məkan məlumatlarını əldə etmək üçün.  
**Access**: İctimai.

### POST `/api/venues`
Yeni məkan yaratmaq üçün (yalnız admin istifadəçilər).  
**Input**: `name`, `location`, `capacity`, `description`  
**Access**: Admin.

### PUT `/api/venues/:id`
Verilən `id`-yə əsasən məkan məlumatlarını yeniləmək üçün (yalnız admin istifadəçilər).  
**Access**: Admin.

### DELETE `/api/venues/:id`
Verilən `id`-yə əsasən məkanı silmək üçün (yalnız admin istifadəçilər).  
**Access**: Admin.

## Rezervasiya Əməliyyatları

### GET `/api/reservations`
Bütün rezervasiyalara baxmaq üçün (yalnız admin istifadəçilər).  
**Access**: Admin.

### GET `/api/reservations/:id`
Verilən `id`-yə əsasən rezervasiya məlumatlarını əldə etmək üçün.  
**Access**: Avtorizasiya tələb olunur.

### POST `/api/reservations`
Yeni rezervasiya yaratmaq üçün.  
**Input**: `date`, `time`, `numberOfPeople`  
**Response**: Yaradılan rezervasiya məlumatları.  
**Access**: İctimai (giriş tələb olunur).

### DELETE `/api/reservations/:id`
Verilən `id`-yə əsasən rezervasiyanı ləğv etmək üçün.  
**Access**: Avtorizasiya tələb olunur.
