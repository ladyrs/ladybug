use anchor_lang::prelude::*;

declare_id!("AY8VMGKXmjEQ5Eora4hKfnXJt6KUFdnPEipZvSygJDCm");

#[program]
pub mod contract {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
