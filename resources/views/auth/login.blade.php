@extends('layouts.app')

@section('content')
<div class=" mx-96 text-start px-8 justify-center">
    <div class="grid justify-content-center">
        <div class="md:grid-cols-6">
            <div class="card border rounded-md shadow-lg">
               
                <div class="text-2xl pl-4 font-bold font-b612 text-blue-500 my-4">
                    {{  __('Login') }}
                </div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="row mb-3">
                            <label for="email" class=" md:col-span-2 col-form-label md:text-end text-xl pl-4">{{ __('Email Address') }}</label>

                            <div class="col-md-6 pl-4">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror border border-blue-500 rounded-md pl-2 w-64 h-12 shadow-md" placeholder="Enter Your Email" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end text-xl pl-4">{{ __('Password') }}</label>

                            <div class="col-md-6  pl-4">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror border border-blue-500 rounded-md pl-2 w-64 h-12 shadow-md" placeholder="Password" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check  pl-4">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-8 offset-md-4  pl-4">
                                <button type="submit" class="text-white bg-blue-500 px-4 py-3 mb-2 rounded-xl">
                                    {{ __('Login') }}
                                </button>

                                @if (Route::has('password.request'))
                                    <a class="text-blue-500" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
