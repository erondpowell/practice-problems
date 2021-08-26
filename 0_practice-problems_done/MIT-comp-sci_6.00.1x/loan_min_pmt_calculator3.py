#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Feb 16 11:13:13 2021

@author: EronDonevan
"""

balance = 999999
annualInterestRate = 0.18


def lowest_payment(balance, annualInterestRate):
    '''
    The legit loan pmt calculator.
    '''

    balance_iterator = balance
    months = 12
    monthly_rate = (annualInterestRate / 12)
    lowest_pmt = (balance / 12)
    max_pmt = (balance * ((1 + monthly_rate) ** 12)) / 12
    low = lowest_pmt
    high = max_pmt 
    epsilon = 0.005 
    
    while abs(balance_iterator - 0) > epsilon:
        pmt_guess = ((low + high) / 2)
        balance_iterator = balance
        
        for i in range(months):
            #iterate through all payments with guess
            balance_iterator -= pmt_guess
            interest = monthly_rate * balance_iterator 
            balance_iterator = balance_iterator + interest
            
        if balance_iterator > 0:
            low = pmt_guess
            
        elif balance_iterator < 0:
            high = pmt_guess
                    
    return "Lowest Possible Payment:", round(pmt_guess, 2)
            
print(lowest_payment(balance, annualInterestRate))
          
            
    
    
    
    